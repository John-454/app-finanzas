import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },

  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
},
{
  path: 'productos',
  loadComponent: () => import('./pages/productos/productos.page').then(m => m.ProductosPage)
},
// Las demás rutas las agregaremos luego: facturacion, abonos, contabilidad
{
  path: 'facturacion',
  loadComponent: () => import('./pages/facturacion/facturacion.page').then(m => m.FacturacionPage)
},

  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/productos/productos.page').then(m => m.ProductosPage)
  },
  // Puedes agregar aquí otras rutas, como facturación, home, etc.

  {
  path: 'saldos',
  loadComponent: () => import('./pages/saldos/saldos.page').then(m => m.SaldosPage)
  },

  {
  path: 'nuevo-abono',
  loadComponent: () => import('./pages/nuevo-abono/nuevo-abono.page').then(m => m.NuevoAbonoPage)
    },

  {
  path: 'gestion-saldos',
  loadComponent: () => import('./pages/gestion-saldos/gestion-saldos.page').then(m => m.GestionSaldosPage)
  },

  {
    path: 'saldos-por-cobrar',
    loadComponent: () => import('./pages/saldos-por-cobrar/saldos-por-cobrar.page').then(m => m.GestionSaldosPage)
  },

  {
    path: 'contabilidad',
    loadComponent: () => import('./pages/contabilidad/contabilidad.page').then(m => m.ContabilidadPage)
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
