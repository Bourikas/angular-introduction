
//  ΤΟ ΤΡΕΧΟΥΜΕ ΜΕ ng serve ΣΤΟ TERMINAL, ΟΝΤΑΣ ΣΤΟΝ ΦΑΚΕΛΟ ΤΟΥ PROJECT
// ΠΗΓΑΙΝΩ ΣΤΟΝ BROWSER: http://localhost:4200/
 
//***εδώ είναι ο controller στο μοντέλο MVC***//
 
// Καθε component που φτιάχνουμε με ng generate component
// είναι μία κλάση
 
import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet,
    ListGroupMenuComponent,
    PersonTableComponent,
    EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
 
export class AppComponent {
  // name='Bourikatsu';
 
  // το μεταφέρουμε στο person-table-component.ts:
  //
  // person = {
  //   givenName: 'Tonia',
  //   surName: 'Papadogiorgaki',
  //   age: 115,
  //   email: 'onetwo@aueb.gr'
  // }
 
  
 
  // array από Person:
}