import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FacturaService } from 'src/app/core/services/factura.service';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.page.html',
  styleUrls: ['./contabilidad.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ContabilidadPage implements OnInit, OnDestroy {

  totalVendido: number = 0;
  totalSaldoPendiente: number = 0;
  terminoBusqueda: string = '';
  clienteSeleccionado: string = '';
  resumenCliente = {
    total: 0,
    abono: 0,
    saldo: 0
  };

  facturas: any[] = [];
  clienteChart: Chart | null = null;

  constructor(private facturaService: FacturaService) {}

  async ngOnInit() {
    try {
      this.facturas = await this.facturaService.obtenerTodas();

      this.totalVendido = this.facturas.reduce((acc: number, f: any) => acc + f.total, 0);
      this.totalSaldoPendiente = this.facturas.reduce((acc: number, f: any) => acc + (f.total - (f.abono || 0)), 0);

      this.generarGraficoGeneral();
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  generarGraficoGeneral() {
    const canvas = document.getElementById('graficoContabilidad') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Total Vendido', 'Saldos Pendientes'],
        datasets: [{
          data: [this.totalVendido, this.totalSaldoPendiente],
          backgroundColor: ['#4CAF50', '#F44336']
        }]
      }
    });
  }

  buscarPorCliente() {
    const cliente = this.terminoBusqueda.trim().toLowerCase();

    const facturasCliente = this.facturas.filter(f => f.cliente.toLowerCase().includes(cliente));

    const total = facturasCliente.reduce((acc, f) => acc + f.total, 0);
    const abono = facturasCliente.reduce((acc, f) => acc + (f.abono || 0), 0);
    const saldo = total - abono;

    this.resumenCliente = { total, abono, saldo };
    this.clienteSeleccionado = cliente;

    this.generarGraficoCliente();
  }

  generarGraficoCliente() {
    const canvas = document.getElementById('graficoCliente') as HTMLCanvasElement;
    if (!canvas) return;

    // ✅ Destruir el gráfico anterior si existe
    if (this.clienteChart) {
      this.clienteChart.destroy();
    }

    this.clienteChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Total', 'Abonado', 'Saldo'],
        datasets: [{
          data: [
            this.resumenCliente.total,
            this.resumenCliente.abono,
            this.resumenCliente.saldo
          ],
          backgroundColor: ['#2196F3', '#4CAF50', '#F44336']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: `Resumen de ${this.terminoBusqueda}`
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.clienteChart) {
      this.clienteChart.destroy();
    }
  }
}

