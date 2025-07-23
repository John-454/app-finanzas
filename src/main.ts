import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';


import { addIcons } from 'ionicons';
import { receiptOutline, cubeOutline, searchOutline, cashOutline, addOutline, createOutline } from 'ionicons/icons';

addIcons({
  'receipt-outline': receiptOutline,
  'cube-outline': cubeOutline,
  'search-outline': searchOutline,
  'cash-outline': cashOutline,
  'add-outline': addOutline,
  'create-outline': createOutline,
});


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
