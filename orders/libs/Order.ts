import { IUserViewModel } from "../../shared/User";
import { IProductViewModel } from "../../shared/Product";

export interface IOrder {
  id: string;
  user: IUserViewModel;
  products: IProductViewModel[];
  createdAt: string;
}

export type OrderId = string;
