import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-componente-tres',
  imports: [NgFor],
  templateUrl: './componente-tres.component.html',
  styleUrl: './componente-tres.component.css'
})
export class ComponenteTresComponent {

  array = [
    
    {marca: "mate", tipo: "yerba"},
    {marca: "cafe", tipo: "bebida"},
    {marca: "harina", tipo: "0000"},
    {marca: "palmitos", tipo: "lata"},


  ]


}
