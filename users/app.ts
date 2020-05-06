import * as express from "express";
import { userService } from "./libs";
import { IUserViewModel } from "../shared/User";
import { IUser } from "./libs/User";

export const app = express();

app.use(express.json());

app.get("/api/v1/users/:id", (req, res) => {
  const user: IUser = userService.getUser(req.params.id);
  const userView: IUserViewModel = {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
  };
  res.json(userView);
});
