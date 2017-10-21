import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../model/cart-items.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html"

})

export class ProductListComponent {

  products: Array<Product> = [];

  constructor(private cartService: CartService, private productService: ProductService) {
    this.productService.getProductsData().subscribe((data) => {
      this.products = data.json();
    }, (err) => {

    })
  }

  addToCart(selectedProduct: Product) {
    let isAlreadyAdded: boolean = false;
    let cartItem: CartItem;
    for (let item of this.cartService.getCartItems()) {
      if (item.name === selectedProduct.name) {
        isAlreadyAdded = true;
        cartItem = item;
      }
    }
    if (!isAlreadyAdded) {
      cartItem = new CartItem(selectedProduct.name, selectedProduct.price, 1)
      this.cartService.addCartItem(cartItem);
    }
    else {
      cartItem.qty += 1;
    }
  }
}
