import { Component, OnInit} from '@angular/core';
import { InyeccionService } from '../servicios/inyeccion.service';
import { Item } from './data-model-interfaz';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.css'],
  imports: [NgFor],
})
export class ComponenteTresComponent implements OnInit {

  array: Item[] = [];

  constructor(private inyeccionService: InyeccionService) {}

  ngOnInit(): void {
    this.array = this.inyeccionService.getDatos();
  }
}