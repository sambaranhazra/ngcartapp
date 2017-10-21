import {Component} from "@angular/core";

@Component({
  template: `
    <div class="col-sm-6 well">
      <product-list></product-list>
    </div>

    <div class="col-sm-6 well">
      <cart-items></cart-items>
    </div>`
})
export class ListComponent {
}
