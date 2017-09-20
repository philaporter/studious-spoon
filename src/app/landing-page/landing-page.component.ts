import { Component, OnInit } 	from '@angular/core';
import { MortyComponent }       from '../morty/morty.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: []
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
