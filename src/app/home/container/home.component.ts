import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('divFadeIn', [
      state('start', style({
        opacity: 0,
        transform: 'translateX(0)'
      })),
      state('fadedIn', style({
        opacity: 1,        
        transform: 'translateX(10%)'
      })),
      transition('start <=> fadedIn', animate('500ms ease-out')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  state = 'start';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {

      this.state === 'start' ? this.state ="fadedIn" : this.state ="start";
    },400);
  }

}
