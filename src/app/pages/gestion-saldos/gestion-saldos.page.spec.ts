import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionSaldosPage } from './gestion-saldos.page';

describe('GestionSaldosPage', () => {
  let component: GestionSaldosPage;
  let fixture: ComponentFixture<GestionSaldosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSaldosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
