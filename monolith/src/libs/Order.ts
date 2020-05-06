import { IUser } from "./User";
import { IProduct } from "./Product";

export interface IOrder {
  id: string;
  user: IUser;
  products: IProduct[];
  createdAt: string;
}

export type OrderId = string;
