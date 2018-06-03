import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SalaryConverterService } from '../../services/salary-conveter.service';

@Component({
  selector: 'app-stats-board',
  templateUrl: './stats-board.component.html',
  styleUrls: ['./stats-board.component.css']
})
export class StatsBoardComponent implements OnInit {
  salary:number;
  salaryPerSecond:number;

  constructor(private route: ActivatedRoute,
              private salaryConverter: SalaryConverterService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.salary = +params['salary'];
          this.salaryPerSecond = this.salaryConverter.getSalaryPerSecond(this.salary);
          console.log('salaire', this.salaryPerSecond);
        }
      )
  }

}
