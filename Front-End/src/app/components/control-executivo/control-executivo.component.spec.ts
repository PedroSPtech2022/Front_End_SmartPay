import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlExecutivoComponent } from './control-executivo.component';

describe('ControlExecutivoComponent', () => {
  let component: ControlExecutivoComponent;
  let fixture: ComponentFixture<ControlExecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlExecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlExecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
