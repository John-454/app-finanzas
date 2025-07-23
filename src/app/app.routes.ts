import { Routes } from '@angular/router';
import { ProductosPage } from './pages/productos/productos.page';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'productos',
    component: ProductosPage
  },
  {
    path: 'facturacion',
    loadComponent: () => import('./pages/facturacion/facturacion.page').then( m => m.FacturacionPage)
  },
  {
    path: 'saldos',
    loadComponent: () => import('./pages/saldos/saldos.page').then( m => m.SaldosPage)
  },
  {
    path: 'saldos-por-cobrar',
    loadComponent: () => import('./pages/saldos-por-cobrar/saldos-por-cobrar.page').then( m => m.GestionSaldosPage)
  },
  {
  path: 'nuevo-abono/:id',
  loadComponent: () => import('./pages/nuevo-abono/nuevo-abono.page').then(m => m.NuevoAbonoPage)
},
  {
    path: 'gestion-saldos',
    loadComponent: () => import('./pages/gestion-saldos/gestion-saldos.page').then( m => m.GestionSaldosPage)
  },
  {
    path: 'contabilidad',
    loadComponent: () => import('./pages/contabilidad/contabilidad.page').then( m => m.ContabilidadPage)
  },

  
];
