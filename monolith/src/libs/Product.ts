export interface IProduct {
  id: ProductId;
  name: string;
  cost: number;
  createdAt: string;
}

export type ProductId = string;
