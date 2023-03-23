import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesListComponent } from './shoes-list.component';

describe('ShoesListComponent', () => {
  let component: ShoesListComponent;
  let fixture: ComponentFixture<ShoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
