import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryEmployeeComponent } from './registry-employee.component';

describe('RegistryEmployeeComponent', () => {
  let component: RegistryEmployeeComponent;
  let fixture: ComponentFixture<RegistryEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistryEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
