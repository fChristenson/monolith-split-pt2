import * as express from "express";
import { ICreateOrderRequest, IOrderViewModel } from "../../shared/Order";
import { userService, productService, orderService } from "./libs";
import { IUser } from "./libs/User";
import { IUserViewModel } from "../../shared/User";

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

app.get("/api/v1/products/:idCsv", (req, res) => {
  const ids = req.params.idCsv.split(",");
  const product = productService.getProducts(ids);
  res.json(product);
});

app.post("/api/v1/orders", (req, res) => {
  const createRequest = req.body as ICreateOrderRequest;
  const user = userService.getUser(createRequest.userId);
  const products = productService.getProducts(createRequest.products);
  orderService.createOrder(user, products);

  const orderView: IOrderViewModel = {
    id: "id",
    user,
    products,
  };

  res.json(orderView);
});

app.post("/api/v1/emails", (req, res) => {
  // send out emails

  res.end("emails");
});
