import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalAbonoComponent } from '../facturas/components/modal-abono/modal-abono.component';
import { FacturaService } from 'src/app/core/services/factura.service';
import { FacturaRequest } from 'src/app/models/factura-request.model';

@Component({
  selector: 'app-gestion-saldos',
  templateUrl: '././saldos-por-cobrar.page.html',
  styleUrls: ['./saldos-por-cobrar.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule, ModalAbonoComponent],
})
export class GestionSaldosPage implements OnInit {
  terminoBusqueda: string = '';
  facturasFiltradas: FacturaRequest[] = [];
  todasLasFacturas: FacturaRequest[] = [];

  constructor(
    private facturaService: FacturaService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    const response = await this.facturaService.obtenerTodas();
    this.todasLasFacturas = response.data;
  }

  async buscarFacturasPorCliente() {
  const termino = this.terminoBusqueda.toLowerCase();

  try {
    const response = await this.facturaService.obtenerTodas(); // obtiene los datos actualizados
    this.todasLasFacturas = response; // <-- si necesitas guardar la copia completa
    this.facturasFiltradas = response
      .filter((f: FacturaRequest) => f.cliente.toLowerCase().includes(termino))
      .sort((a: FacturaRequest, b: FacturaRequest) => {
        const fechaA = new Date(a.createdAt ?? 0).getTime();
        const fechaB = new Date(b.createdAt ?? 0).getTime();
        return fechaB - fechaA;
      });
  } catch (error) {
    console.error('Error al actualizar facturas:', error);
  }
}


  calcularSaldo(f: FacturaRequest): number {
    return f.total - (f.abono || 0);
  }

  async abrirModalAbono(factura: FacturaRequest) {
    console.log('Abriendo modal para factura:', factura);
  const modal = await this.modalCtrl.create({
    component: ModalAbonoComponent,
    componentProps: { factura }
  });

  await modal.present();

  const { data } = await modal.onDidDismiss();
  if (data?.actualizado) {
    this.buscarFacturasPorCliente(); // refrescar lista
  }
}

}


