import { ProductId, IProduct } from "./Product";

export class ProductService {
  getProducts(ids: ProductId[]): IProduct[] {
    // Pretend we got this from a database
    return [
      {
        id: "id",
        name: "foo",
        cost: 123,
        createdAt: new Date().toISOString(),
      },
    ];
  }
}
