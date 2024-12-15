import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../models/movie-interfaz';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'] 
})
export class MovieItemComponent {
  @Input() movie! : Movie;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie(){
    this.movieSelected.emit (this.movie.title)
  }
}