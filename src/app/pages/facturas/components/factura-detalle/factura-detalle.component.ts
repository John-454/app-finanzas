import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FacturaRequest } from 'src/app/models/factura-request.model';

@Component({
  selector: 'app-factura-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './factura-detalle.component.html',
})
export class FacturaDetalleComponent {
  @Input() factura!: FacturaRequest;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}

