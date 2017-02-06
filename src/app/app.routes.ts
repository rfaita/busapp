
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinesComponent } from './lines/lines.component';
import { BusStopsComponent } from './busstops/busstops.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/lines',
    pathMatch: 'full'
  },
  { path: 'lines', component: LinesComponent },
  { path: 'busstops', component: BusStopsComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);