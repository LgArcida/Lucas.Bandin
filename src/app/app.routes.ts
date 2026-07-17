import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'me',
    loadComponent: () => import('./pages/me/me').then((m) => m.HomeComponent),
  },
  { path: '', redirectTo: '/me', pathMatch: 'full' },
];
