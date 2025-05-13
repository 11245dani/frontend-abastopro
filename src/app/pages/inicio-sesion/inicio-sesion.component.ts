import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {
  tipoSeleccionado: string = 'tienda';

  constructor(private router: Router) {}

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
  }

  iniciarSesion() {
    // Aquí pondrás la lógica real de autenticación con la API.
    // Por ahora simula el login y redirige a una página principal:
    this.router.navigate(['/dashboard']);  // reemplaza por tu ruta real
  }

  volverAlInicio() {
  this.router.navigate(['/']);
  }
}
