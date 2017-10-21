import {Product} from "./model/product.model";
import {ProductService} from "./services/product.service";
import {Component} from "@angular/core";

@Component({
  templateUrl: `./manage.component.html`
})
export class ManageComponent {
  products: Array<Product> = [];
  fromProduct: Product = new Product("", "", 0, "");

  constructor(private productService: ProductService) {
    this.productService.getProductsData().subscribe((data) => {
      this.products = data.json();
    }, (err) => {
      console.log(err);
    });
  }

  saveProduct() {
    this.productService.addProduct(this.fromProduct).subscribe(
      (resp) => {
        console.log("save success")
        this.products.push(resp.json());
      }
      , (err) => {
        console.log("save error")
      });
    this.fromProduct = new Product("", "", 0, "");
  }

  deleteProduct(productid, index) {
    this.productService.deleteProduct(productid).subscribe(
      (resp) => {
        this.products.splice(index, 1);
        console.log("Item deleted")
      },
      (err) => console.log("delete error"));
  }

  editProduct(product: Product) {
    Object.assign(this.fromProduct, product);
  }
}
