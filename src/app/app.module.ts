import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module";
import {CartService} from "./services/cart.service";
import {ProductService} from "./services/product.service";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./notfound.component";
import {ReverseTextPipe} from "./reverse-text.pipe";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {ListComponent} from "./list.component";
import {ManageComponent} from "./manage.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    NotFoundComponent,
    ManageComponent,
    ReverseTextPipe
  ],
  imports: [
    BrowserModule, ShoppingModule, HttpModule, FormsModule, RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "list", component: ListComponent},
      {path: "manage", component: ManageComponent},
      {path: "**", component: NotFoundComponent}
    ])
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
