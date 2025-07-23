import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/models/productos.model';


import { ModalController } from '@ionic/angular';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class ProductosPage implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private modalCtrl: ModalController
  ) {}

  async abrirFormulario() {
  const modal = await this.modalCtrl.create({
    component: ProductoFormComponent
  });

  await modal.present();

  const { data } = await modal.onDidDismiss();

  if (data) {
    this.productoService.crear(data)
      .then(() => this.cargarProductos())
      .catch(err => console.error('Error al guardar producto:', err));
  }
}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerTodos()
      .then(response => {
        this.productos = response.data;
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      });
  }

  
}
