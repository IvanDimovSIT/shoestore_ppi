import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoePageComponent } from './shoe-page.component';

describe('ShoePageComponent', () => {
  let component: ShoePageComponent;
  let fixture: ComponentFixture<ShoePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
