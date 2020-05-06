import { ProductId } from "../monolith/src/libs/Product";

export interface IProductViewModel {
  id: ProductId;
  name: string;
  cost: number;
  createdAt: string;
}
