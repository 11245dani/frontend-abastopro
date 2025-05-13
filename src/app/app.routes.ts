import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta por defecto
  { path: 'login', component: HomeComponent },
  { path: 'registro', component: HomeComponent }
];
