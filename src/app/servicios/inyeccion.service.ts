import { Injectable } from '@angular/core';
import { Item } from '../componente-tres/data-model-interfaz';
@Injectable({
  providedIn: 'root',
})
export class InyeccionService {

  private array: Item[] = [ 
    { marca: 'mate', tipo: 'yerba' },
    { marca: 'cafe', tipo: 'bebida' },
    { marca: 'harina', tipo: '0000' },
    { marca: 'palmitos', tipo: 'lata' },
  ];

  constructor() {}

  getDatos(): Item[] { 
    return this.array;
  }
}