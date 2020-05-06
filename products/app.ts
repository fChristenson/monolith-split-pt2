import * as express from "express";
import { productService } from "./libs";
import { IProductViewModel } from "../shared/Product";

export const app = express();

app.use(express.json());

app.get("/api/v1/products/:idCsv", (req, res) => {
  const ids = req.params.idCsv.split(",");
  const product: IProductViewModel[] = productService.getProducts(ids);
  res.json(product);
});
