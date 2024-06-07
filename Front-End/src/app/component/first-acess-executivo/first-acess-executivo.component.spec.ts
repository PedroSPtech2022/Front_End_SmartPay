import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAcessExecutivoComponent } from './first-acess-executivo.component';

describe('FirtsAcessExecutivoComponent', () => {
  let component: FirstAcessExecutivoComponent;
  let fixture: ComponentFixture<FirstAcessExecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAcessExecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstAcessExecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
