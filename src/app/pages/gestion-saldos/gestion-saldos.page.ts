import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gestion-saldos',
  templateUrl: './gestion-saldos.page.html',
  styleUrls: ['./gestion-saldos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionSaldosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
