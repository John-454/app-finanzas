import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoAbonoPage } from './nuevo-abono.page';

describe('NuevoAbonoPage', () => {
  let component: NuevoAbonoPage;
  let fixture: ComponentFixture<NuevoAbonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAbonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
