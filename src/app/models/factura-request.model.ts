export interface FacturaRequest {
  _id?: string;
  cliente: string;
  productos: {
    nombre: string;
    precioUnitario: number;
    cantidad?: number;
  }[];
  total: number;
  abono: number;
  saldo?: number;
  historialAbonos?: {
    monto: number;
    fecha: Date;
  }[];
  createdAt?: string;  // ✅ AÑADE ESTA LÍNEA
  updatedAt?: string;  // (opcional) si también usas esto desde el backend
}

