import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta por defecto
  { path: 'iniciar-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent }
];



