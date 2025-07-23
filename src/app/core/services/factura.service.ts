import axios from 'axios';
import { Injectable } from '@angular/core';
import { FacturaRequest } from 'src/app/models/factura-request.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl = 'https://api-finanzas-vk8w.onrender.com/api/facturas'; // Cambia si tu backend tiene otro puerto o ruta

  constructor() {}

  async guardarFactura(factura: FacturaRequest): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, factura);
      return response.data;
    } catch (error) {
      console.error('Error en FacturaService:', error);
      throw error;
    }
  }

  async obtenerTodas(): Promise<any> {
  try {
    const response = await axios.get(this.apiUrl); // Aquí sí usamos axios correctamente
    return response.data;
  } catch (error) {
    console.error('Error al obtener facturas:', error);
    throw error;
  }
}

async registrarAbono(id: string, abono: number): Promise<any> {
  try {
    const response = await axios.put(`${this.apiUrl}/${id}/abono`, { abono });
    return response.data;
  } catch (error) {
    console.error('Error al registrar abono:', error);
    throw error;
  }
}





}
