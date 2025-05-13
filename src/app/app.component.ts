import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // 👈 ¡esto es muy importante!
  imports: [RouterOutlet],  // 👈 importa RouterOutlet aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-abastopro';
}
