import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFuncionarioComponent } from './control-funcionario.component';

describe('ControlFuncionarioComponent', () => {
  let component: ControlFuncionarioComponent;
  let fixture: ComponentFixture<ControlFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFuncionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
