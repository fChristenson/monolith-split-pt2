import { UserId } from "../monolith/src/libs/User";
import { ProductId } from "../monolith/src/libs/Product";
import { IUserViewModel } from "./User";
import { IProductViewModel } from "./Product";

export interface IOrderViewModel {
  id: string;
  user: IUserViewModel;
  products: IProductViewModel[];
}

export interface ICreateOrderRequest {
  userId: UserId;
  products: ProductId[];
}
