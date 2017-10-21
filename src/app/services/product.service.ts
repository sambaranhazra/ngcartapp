import {Product} from "../model/product.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ProductService {
  private productsData: Product[] = [];
  restUrl: string = "http://localhost:2403/wsproducts";

  constructor(private http: Http) {}

  getProductsData() {
    return this.http.get(this.restUrl);
  }
  addProduct(product: Product){
    return this.http.post(this.restUrl,product);
  }

  deleteProduct(id: string){
    return this.http.delete(this.restUrl+"/"+id);
  }
}
