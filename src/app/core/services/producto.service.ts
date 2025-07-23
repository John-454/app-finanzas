import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Producto } from '../../models/productos.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  constructor(private api: ApiService) {}

  obtenerTodos() {
    return this.api.get('productos');
  }

  crear(producto: Producto) {
    return this.api.post('productos', producto);
  }

  actualizar(id: string, producto: Producto) {
    return this.api.put(`productos/${id}`, producto);
  }

  eliminar(id: string) {
    return this.api.delete(`productos/${id}`);
  }
}
