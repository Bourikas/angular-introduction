import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Bourikas';
  marilisa = 'Κάμπια';
  person0 = {  
    givenName: 'Μαριλιζα',
    surName: 'Ioannou',
    age: 25,
    email: 'nikosioannoy@aueb.gr',
    address: "athens, greece"
  }


person1 =  {
    givenName: 'Μαριλιζα',
    surName: 'Ioannou',
    age: 25,
    email: 'nikosioannoy@aueb.gr',
    address: "athens, greece"
  }
  
}

