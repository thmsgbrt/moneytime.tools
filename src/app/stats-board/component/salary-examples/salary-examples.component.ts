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
      name: "C. Ronaldo",
      salary: "6,610,000€",
      img: "assets/cristiano.jpg",
      link: "/salary/6610000"      
    },
    {
      name: "C. Ronaldo",
      salary: "6,610,000€",
      img: "assets/cristiano.jpg",
      link: "/salary/6610000"      
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
