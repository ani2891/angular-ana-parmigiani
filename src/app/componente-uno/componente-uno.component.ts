import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-componente-uno',
  imports: [NgIf],
  templateUrl: './componente-uno.component.html',
  styleUrl: './componente-uno.component.css'
})
export class ComponenteUnoComponent {

  mensaje: string = 'titulo';
  mensaje02: string = 'titulo 2';
  mensaje03: boolean = false;


}
