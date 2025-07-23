import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root' // ✅ Esto registra el servicio globalmente
})
export class ApiService {
  private apiUrl = 'https://api-finanzas-vk8w.onrender.com/api'; // Cambia por tu URL real

  get(endpoint: string, params?: any) {
    return axios.get(`${this.apiUrl}/${endpoint}`, { params });
  }

  post(endpoint: string, data: any) {
    return axios.post(`${this.apiUrl}/${endpoint}`, data);
  }

  put(endpoint: string, data: any) {
    return axios.put(`${this.apiUrl}/${endpoint}`, data);
  }

  delete(endpoint: string) {
    return axios.delete(`${this.apiUrl}/${endpoint}`);
  }
}
