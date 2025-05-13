import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  tipoSeleccionado: string = 'tienda';

  tienda = {
    nombre: '',
    email: '',
    password: '',
    direccion: '',
    telefono: ''
  };

  distribuidor = {
    nombre: '',
    email: '',
    password: '',
    direccion: '',
    telefono: ''
  };

  mensaje: string = '';
  error: string = '';

  mostrarFormulario(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.mensaje = '';
    this.error = '';
  }

  camposIncompletos(datos: any): boolean {
    return Object.values(datos).some(valor => String(valor).trim() === '');
  }

  registrarTienda() {
    if (this.camposIncompletos(this.tienda)) {
      this.error = 'Por favor, completa todos los campos de la tienda.';
      this.mensaje = '';
      return;
    }

    console.log('Registrando tienda:', this.tienda);
    this.mensaje = 'Tienda registrada exitosamente.';
    this.error = '';
  }

  registrarDistribuidor() {
    if (this.camposIncompletos(this.distribuidor)) {
      this.error = 'Por favor, completa todos los campos del distribuidor.';
      this.mensaje = '';
      return;
    }

    console.log('Registrando distribuidor:', this.distribuidor);
    this.mensaje = 'Distribuidor registrado exitosamente.';
    this.error = '';
  }
}
