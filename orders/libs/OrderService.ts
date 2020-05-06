import { IOrder } from "./Order";
import { IUserViewModel } from "../../shared/User";
import { IProductViewModel } from "../../shared/Product";

export class OrderService {
  createOrder(user: IUserViewModel, products: IProductViewModel[]): IOrder {
    // Pretend we got this from a database
    return {
      id: "id",
      user,
      products,
      createdAt: new Date().toISOString(),
    };
  }
}
