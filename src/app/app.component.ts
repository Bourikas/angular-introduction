
//  ΤΟ ΤΡΕΧΟΥΜΕ ΜΕ ng serve ΣΤΟ TERMINAL, ΟΝΤΑΣ ΣΤΟΝ ΦΑΚΕΛΟ ΤΟΥ PROJECT
// ΠΗΓΑΙΝΩ ΣΤΟΝ BROWSER: http://localhost:4200/
 
//***εδώ είναι ο controller στο μοντέλο MVC***//
 
// Καθε component που φτιάχνουμε με ng generate component
// είναι μία κλάση
 
import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
 
export class AppComponent {
  name='Tonia';
 
  // το μεταφέρουμε στο person-table-component.ts:
  //
  // person = {
  //   givenName: 'Tonia',
  //   surName: 'Papadogiorgaki',
  //   age: 115,
  //   email: 'onetwo@aueb.gr'
  // }
 
  person0: Person = {
    givenName: 'Tonia',
    surName: "Papadogiorgaki",
    age: 155,
    email: 'onetwo@aueb.gr',
    address: 'Athens, Greece'
  };
 
  person1: Person = {
    givenName: 'John',
    surName: "Doe",
    age: 75,
    email: 'doe@aueb.gr',
    address: 'New York, USA'
  };
 
  // array από Person:
  users: Person[] = [
    {
      givenName: 'John',
      surName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jane',
      surName: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      address: '123 Main St',
    },
    {
      givenName: 'Jim',
      surName: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jill',
      surName: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      address: '456 Park Ave',
    },
    {
      givenName: 'Jake',
      surName: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Judy',
      surName: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      address: '789 Broadway',
    },
    {
      givenName: 'Jack',
      surName: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Julie',
      surName: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      address: '321 Oak St',
    },
    {
      givenName: 'Jerry',
      surName: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      address: '654 Pine St',
    },
    {
      givenName: 'June',
      surName: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      address: '654 Pine St',
    },
  ]
 
}
 