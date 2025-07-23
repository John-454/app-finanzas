import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Asegúrate de tener esto
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FacturacionPageRoutingModule } from './../pages/facturacion/facturacion-routing.module';
import { FacturacionPage } from './../pages/facturacion/facturacion.page';

@NgModule({
  imports: [
    CommonModule,     // <--- Importar esto es clave para que funcionen *ngIf, *ngFor
    FormsModule,
    IonicModule,
    FacturacionPageRoutingModule
  ],
  declarations: [FacturacionPage]
})
export class FacturacionPageModule {}
