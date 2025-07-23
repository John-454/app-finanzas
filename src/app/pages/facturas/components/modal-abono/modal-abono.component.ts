import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE
import { IonicModule, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FacturaRequest } from 'src/app/models/factura-request.model';
import { FacturaService } from 'src/app/core/services/factura.service';

@Component({
  selector: 'app-modal-abono',
  templateUrl: './modal-abono.component.html',
  styleUrls: ['./modal-abono.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ModalAbonoComponent {
  @Input() factura!: FacturaRequest;
  abono: number = 0;

  constructor(
    private modalCtrl: ModalController,
    private facturaService: FacturaService,
    private toastCtrl: ToastController
  ) {}

  async guardarAbono() {
    try {
      await this.facturaService.registrarAbono(this.factura._id!, this.abono);
      this.modalCtrl.dismiss({ actualizado: true }); // cerramos con éxito
    } catch (error) {
      console.error('Error al registrar abono:', error);
    }
  }

  async registrarAbono() {
  if (this.abono <= 0) {
    const toast = await this.toastCtrl.create({
      message: 'El abono debe ser mayor a 0',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
    return;
  }

  try {
    await this.facturaService.registrarAbono(this.factura._id!, this.abono);
    const toast = await this.toastCtrl.create({
      message: 'Abono registrado exitosamente',
      duration: 2000,
      color: 'success'
    });
    toast.present();
    this.modalCtrl.dismiss({ actualizado: true });
  } catch (error) {
    const toast = await this.toastCtrl.create({
      message: 'Error al registrar abono',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
    console.error(error);
  }
}


  cerrar() {
    this.modalCtrl.dismiss(false); // cancelado
  }
}
