import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVariableCostComponent } from './list-variable-cost.component';

describe('ListVariableCostComponent', () => {
  let component: ListVariableCostComponent;
  let fixture: ComponentFixture<ListVariableCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVariableCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVariableCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
