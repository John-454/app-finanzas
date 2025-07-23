import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Producto } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/core/services/producto.service';


@Component({
  selector: 'app-producto-form',
  standalone: true,
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss'],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ProductoFormComponent {

  @Input() nombrePropuesto: string = '';

  producto: Producto = {
    nombre: '',
    precioUnitario: 0,
  };

  constructor(
    private modalCtrl: ModalController,
    private productoService: ProductoService
  ) {}

  async guardar() {
  try {
    const response = await this.productoService.crear(this.producto);
    const productoCreado = response.data;

    this.modalCtrl.dismiss(productoCreado, 'confirm');
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    alert('Hubo un error al guardar el producto');
  }
}


  cancelar() {
    this.modalCtrl.dismiss(null);
  }
}
