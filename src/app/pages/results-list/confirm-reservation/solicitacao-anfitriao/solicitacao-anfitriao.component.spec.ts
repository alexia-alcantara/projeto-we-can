import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAnfitriaoComponent } from './solicitacao-anfitriao.component';

describe('SolicitacaoAnfitriaoComponent', () => {
  let component: SolicitacaoAnfitriaoComponent;
  let fixture: ComponentFixture<SolicitacaoAnfitriaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoAnfitriaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoAnfitriaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
