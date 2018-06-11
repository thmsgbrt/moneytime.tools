import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salary-examples',
  templateUrl: './salary-examples.component.html',
  styleUrls: ['./salary-examples.component.scss']
})
export class SalaryExamplesComponent implements OnInit {
  @Output() restartTimer: EventEmitter<any> = new EventEmitter();
  examplesData = [
    {
      name: "E. Macron",
      salary: "17,000€",
      img: "assets/macron.jpg",
      link: "/salary/17000"      
    },
    {
      name: "T. Cook",
      salary: "890,000€",
      img: "assets/cook.jpg",
      link: "/salary/890000"      
    },
    {
      name: "C. Ronaldo",
      salary: "1,750,000€",
      img: "assets/cristiano.jpg",
      link: "/salary/1750000"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onRestartTimer() {
    this.restartTimer.emit();
  }

}
