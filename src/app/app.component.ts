import { Component } from '@angular/core';

import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { ComponenteDosComponent } from "./componente-dos/componente-dos.component";
import { ComponenteTresComponent } from './componente-tres/componente-tres.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ComponenteUnoComponent, ComponenteDosComponent, ComponenteTresComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ana-parmigiani';
}
