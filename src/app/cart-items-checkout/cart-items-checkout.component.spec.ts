import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsCheckoutComponent } from './cart-items-checkout.component';

describe('CartItemsCheckoutComponent', () => {
  let component: CartItemsCheckoutComponent;
  let fixture: ComponentFixture<CartItemsCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
