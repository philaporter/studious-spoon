import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.css']
})
export class MortyComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() quote: string; 

  constructor() { }

  ngOnInit() {
  }

}
