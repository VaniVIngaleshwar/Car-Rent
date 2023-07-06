import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePoliciesComponent } from './vehicle-policies.component';

describe('VehiclePoliciesComponent', () => {
  let component: VehiclePoliciesComponent;
  let fixture: ComponentFixture<VehiclePoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclePoliciesComponent]
    });
    fixture = TestBed.createComponent(VehiclePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
