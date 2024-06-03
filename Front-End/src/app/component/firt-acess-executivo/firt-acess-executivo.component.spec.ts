import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtAcessExecutivoComponent } from './firt-acess-executivo.component';

describe('FirtAcessExecutivoComponent', () => {
  let component: FirtAcessExecutivoComponent;
  let fixture: ComponentFixture<FirtAcessExecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtAcessExecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirtAcessExecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
