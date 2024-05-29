import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlExecutivoAnalyticsComponent } from './control-executivo-analytics.component';

describe('ControlExecutivoAnalyticsComponent', () => {
  let component: ControlExecutivoAnalyticsComponent;
  let fixture: ComponentFixture<ControlExecutivoAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlExecutivoAnalyticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlExecutivoAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
