import { IProduct } from "./Product";
import { IUser } from "./User";
import { IOrder } from "./Order";

export class OrderService {
  createOrder(user: IUser, products: IProduct[]): IOrder {
    // Pretend we got this from a database
    return {
      id: "id",
      user,
      products,
      createdAt: new Date().toISOString(),
    };
  }
}
