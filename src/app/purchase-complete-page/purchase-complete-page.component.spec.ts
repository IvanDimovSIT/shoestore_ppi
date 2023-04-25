import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCompletePageComponent } from './purchase-complete-page.component';

describe('PurchaseCompletePageComponent', () => {
  let component: PurchaseCompletePageComponent;
  let fixture: ComponentFixture<PurchaseCompletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCompletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseCompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
