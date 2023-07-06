import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAvailableComponent } from './cars-available.component';

describe('CarsAvailableComponent', () => {
  let component: CarsAvailableComponent;
  let fixture: ComponentFixture<CarsAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsAvailableComponent]
    });
    fixture = TestBed.createComponent(CarsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
