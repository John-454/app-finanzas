import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaldosPorCobrarPage } from './saldos-por-cobrar.page';

describe('SaldosPorCobrarPage', () => {
  let component: SaldosPorCobrarPage;
  let fixture: ComponentFixture<SaldosPorCobrarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldosPorCobrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
