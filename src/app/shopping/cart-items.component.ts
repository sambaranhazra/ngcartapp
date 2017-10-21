import {Component} from "@angular/core";
import {CartItem} from "../model/cart-items.model";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: "cart-items",
  templateUrl: "./cart-items.component.html"
})
export class CartItemsComponent {
  cartItems: CartItem[];

  constructor(private cartService: CartService, private productService: ProductService) {
    this.cartItems = cartService.getCartItems();
  }

  delete(index: number) {
    this.cartService.deleteCartItem(index);
  }

  totalAmount() {
    let total = 0;
    for (let e of this.cartItems) {
      total += (e.price * e.qty);
    }
    return total;
  }

  totalItems() {
    let totalNoOfItems: number = 0;
    for (let e of this.cartItems) {
      totalNoOfItems += e.qty;
    }
    return totalNoOfItems;
  }
}
