import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListVariableCostComponent } from './employee-list-variable-cost.component';

describe('EmployeeListVariableCostComponent', () => {
  let component: EmployeeListVariableCostComponent;
  let fixture: ComponentFixture<EmployeeListVariableCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListVariableCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeListVariableCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
