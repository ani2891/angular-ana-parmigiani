import { Component } from '@angular/core';
import { ComponenteDosComponent } from "../componente-dos/componente-dos.component";
import { ComponenteTresComponent } from '../componente-tres/componente-tres.component';
import { ComponenteUnoComponent } from '../componente-uno/componente-uno.component';

@Component({
  selector: 'app-ejercicios',
  imports: [ComponenteDosComponent, ComponenteTresComponent, ComponenteUnoComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
