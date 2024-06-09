import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCenterCostComponent } from './info-center-cost.component';

describe('InfoCenterCostComponent', () => {
  let component: InfoCenterCostComponent;
  let fixture: ComponentFixture<InfoCenterCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCenterCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCenterCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
