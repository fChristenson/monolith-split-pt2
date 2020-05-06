import axios from "axios";
import { IProductViewModel } from "../../shared/Product";

export class ProductService {
  getProducts(ids: string[]): Promise<IProductViewModel[]> {
    return axios
      .get(`http://localhost:3000/api/v1/products/${ids.join(",")}`)
      .then((d) => d.data);
  }
}
