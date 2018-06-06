import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-examples',
  templateUrl: './salary-examples.component.html',
  styleUrls: ['./salary-examples.component.scss']
})
export class SalaryExamplesComponent implements OnInit {
  examplesData = [
    {
      name: "C. Ronaldo",
      salary: "6,610,000€",
      img: "assets/cristiano.jpg",
      link: "/salary/6610000"
    },
    {
      name: "E. Macron",
      salary: "17,000€",
      img: "assets/macron.jpg",
      link: "/salary/17000"      
    },
    {
      name: "T. Cook",
      salary: "12,800,000€",
      img: "assets/cook.jpg",
      link: "/salary/12800000"      
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
