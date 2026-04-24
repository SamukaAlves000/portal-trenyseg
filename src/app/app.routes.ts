import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'treinamentos',
    loadComponent: () => import('./pages/training-hub/training-hub.component').then(m => m.TrainingHubComponent)
  },
  {
    path: 'treinamentos/:id',
    loadComponent: () => import('./pages/training-detail/training-detail.component').then(m => m.TrainingDetailComponent)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'validar',
    loadComponent: () => import('./pages/validation/validation.component').then(m => m.ValidationComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
