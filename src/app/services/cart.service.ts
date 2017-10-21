import {CartItem} from "../model/cart-items.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  cartItemsData: Array<CartItem> = [];

  constructor() {
    this.cartItemsData = [];
  }

  getCartItems() {
    return this.cartItemsData;
  }

  addCartItem(item: CartItem): void {
    this.cartItemsData.push(item);
  }

  deleteCartItem(index: number) {
    this.cartItemsData.splice(index, 1);
  }
}
