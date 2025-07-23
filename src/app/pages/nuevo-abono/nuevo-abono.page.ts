import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FacturaService } from 'src/app/core/services/factura.service';
import { FacturaRequest } from 'src/app/models/factura-request.model';
@Component({
  selector: 'app-nuevo-abono',
  templateUrl: './nuevo-abono.page.html',
  styleUrls: ['./nuevo-abono.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class NuevoAbonoPage implements OnInit {

  nombreCliente: string = '';
  facturaEncontrada: any = null;
  nuevoAbono: number = 0;

  constructor(
    private facturaService: FacturaService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  async buscarFactura() {
    try {
      const response = await this.facturaService.obtenerTodas();
      const facturas = response.data;
      this.facturaEncontrada = facturas.find((f: FacturaRequest) => f.cliente.toLowerCase() === this.nombreCliente.toLowerCase());

      if (!this.facturaEncontrada) {
        this.mostrarAlerta('No se encontró una factura para ese cliente.');
      }
    } catch (error) {
      console.error('Error al buscar factura:', error);
    }
  }

  async registrarAbono() {
    if (!this.facturaEncontrada) return;

    this.facturaEncontrada.abono += this.nuevoAbono;

    try {
      await this.facturaService.registrarAbono(this.facturaEncontrada._id, this.nuevoAbono);

      this.mostrarAlerta('Abono registrado correctamente.');
      this.nuevoAbono = 0;
    } catch (error) {
      console.error('Error al actualizar la factura:', error);
      this.mostrarAlerta('Error al registrar el abono.');
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Mensaje',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}

