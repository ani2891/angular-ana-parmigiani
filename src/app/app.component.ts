import { Component } from '@angular/core';
//import { MovieListComponent } from './movie-list/movie-list.component';
//import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
//import { ComponenteDosComponent } from "./componente-dos/componente-dos.component";
//import { ComponenteTresComponent } from './componente-tres/componente-tres.component';
//import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

//import { SearchBarComponent } from "./search-bar/search-bar.component";



@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ana-parmigiani';
}