import { Injectable } from '@angular/core';
import { Movie } from '../models/movie-interfaz';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  getMovies(): Movie[] {
    return [
      { title: 'Intensamente', year: 2015, description: 'Sentimientos 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3Zof6_cCjYhisl68FHmLGTNLDFULtfASlQ&s' },
      { title: 'Toy Story', year: 1995, description: 'Solo ver hasta la 3', image:'https://lumiere-a.akamaihd.net/v1/images/toy_story_1_59238d6b.jpeg'},
      { title: 'The Incredibles', year: 2004, description: 'Donde esta mi supertraje?', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJ-7lVh3c1TfVHQvLa-eOtfSbrhRmVbNyXw&s' },
      { title: 'Frozen', year: 2013, description: 'El ultimo buen musical', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3xYDd-S8S7Nr_7TmCKZZLeAfEqDcewCs2w&s' },
      { title: 'Up', year: 2009, description: 'Para ver un domingo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PSMLxSpXdjuhWdF7igfyW4lOFJL4OeYcNQ&s' },
      { title: 'Cars', year: 2006, description: 'Kuchauuu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0roTOSmU8jKJYYaksLCmPAKwx4CN_4hEJ1Q&s' },
      { title: 'The Lion King', year: 1994, description: 'Classic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStmYQCwsziPJ7agcwYCtru6k0cE9NupfO4Q&s' },
      { title: 'Shrek', year: 2001, description: 'La mejor pelicula del mundo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ecHLtUuM-_jhGiFnFZdrOBBa3kIjHLvvyw&s' },
    ];
  }


}

