import {DomSanitizer} from "@angular/platform-browser";
import {Component} from "@angular/core";

@Component({
  template: `<h3>Welcome to My Shopping App</h3>
  <br> Price: {{price | currency:'INR' | lowercase}}
  <br>Current date: {{myDate | date:"MM/dd/yyyy"}}
  <br>Product Name: {{productName | uppercase | reverseText}}
  <hr>
  <iframe [src]="trustUrl" width="50%" height="300px"></iframe>
  `
})
export class HomeComponent {
  constructor(private domSanitizer: DomSanitizer) {

    this.trustUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.myVideo);
  }

  trustUrl;
  myVideo: string = "https://www.youtube.com/embed/EwYD_xqB7Qs";
  price: number = 100.1234;
  myDate: Date = new Date();
  productName = "sony tv";
}
