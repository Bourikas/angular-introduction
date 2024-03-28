import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Bourikas';
  marilisa = 'Κάμπια';
  person = {
    givenName: 'Μαριλιζα',
    surName: 'Ioannou',
    age: 25,
    email: 'nikosioannoy@aueb.gr'
  }
}
