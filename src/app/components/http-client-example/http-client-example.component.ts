import { Component, OnInit, inject } from '@angular/core';
import { DadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'


@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);
  dadJoke = ' '
  chuckNorrisJoke = ' '

  ngOnInit(): void {
    this.jokesService
    .getDadJoke()
    .subscribe((data: DadJoke)=>{
      console.log(data);
      this.dadJoke=data.joke
    })
    this.jokesService
    .getChuckNorrisJoke()
    .subscribe((data:{value:string})=>{
      console.log(data.value);
      this.chuckNorrisJoke= data.value
    })
  }
}
