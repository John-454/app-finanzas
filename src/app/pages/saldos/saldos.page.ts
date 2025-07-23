import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.page.html',
  styleUrls: ['./saldos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SaldosPage {
  constructor(private router: Router) {}

  irASaldosPorCobrar() {
    this.router.navigate(['/saldos-por-cobrar']);
  }

  irANuevoAbono() {
    this.router.navigate(['/nuevo-abono']);
  }

  irAHistorial() {
    this.router.navigate(['/historial-abonos']);
  }
}


