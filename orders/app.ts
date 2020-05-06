import * as express from "express";
import { ICreateOrderRequest, IOrderViewModel } from "../shared/Order";
import { userService, productService, orderService } from "./libs";

export const app = express();

app.use(express.json());

app.post("/api/v1/orders", async (req, res) => {
  const createRequest = req.body as ICreateOrderRequest;
  const user = await userService.getUser(createRequest.userId);
  const products = await productService.getProducts(createRequest.products);
  orderService.createOrder(user, products);

  const orderView: IOrderViewModel = {
    id: "id",
    user,
    products,
  };

  res.json(orderView);
});

// Almost all emails we send are order confirmation emails so it makes sense that the orders team
// owns emails as well
app.post("/api/v1/emails", (req, res) => {
  // send out emails

  res.end("emails");
});
