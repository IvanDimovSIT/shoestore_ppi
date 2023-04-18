import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeFiltersComponent } from './shoe-filters.component';

describe('ShoeFiltersComponent', () => {
  let component: ShoeFiltersComponent;
  let fixture: ComponentFixture<ShoeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
