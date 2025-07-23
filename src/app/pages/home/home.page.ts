import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class HomePage {
  constructor(private router: Router) {}

  irARuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
