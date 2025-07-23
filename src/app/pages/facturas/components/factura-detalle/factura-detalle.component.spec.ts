import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacturaDetalleComponent } from './factura-detalle.component';

describe('FacturaDetalleComponent', () => {
  let component: FacturaDetalleComponent;
  let fixture: ComponentFixture<FacturaDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FacturaDetalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
