import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeButtonsComponent } from './size-buttons.component';

describe('SizeButtonsComponent', () => {
  let component: SizeButtonsComponent;
  let fixture: ComponentFixture<SizeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
