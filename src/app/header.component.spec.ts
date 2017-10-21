import {TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";
import {CartService} from "./services/cart.service";

describe('Header component testing', () => {
  let hdrobj;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [CartService]
    });
    let fixture = TestBed.createComponent(HeaderComponent);
    hdrobj = fixture.debugElement.componentInstance;
  })
  it('should create instance of header component', () => {

    expect(hdrobj).toBeTruthy();
  })
  it('should verify Data Member of header component', () => {

    expect(hdrobj.cmpHeading).toEqual("My Shopping App");
  })
});
