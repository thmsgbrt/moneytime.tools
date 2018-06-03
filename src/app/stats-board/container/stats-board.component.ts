import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { SalaryConverterService } from '../../services/salary-conveter.service';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-stats-board',
  templateUrl: './stats-board.component.html',
  styleUrls: ['./stats-board.component.css']
})
export class StatsBoardComponent implements OnInit, OnDestroy {
  timer$;
  salary:number;
  salaryPerSecond:number;
  liveSalaryPerSecond:number;
  liveTimer: number;

  constructor(private route: ActivatedRoute,
              private salaryConverter: SalaryConverterService,
              private timerService: TimerService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.salary = +params['salary'];
          this.salaryPerSecond = this.salaryConverter.getSalaryPerSecond(this.salary);
          console.log('salaire', this.salaryPerSecond);
        }
      )

    this.timer$ = this.timerService.start().subscribe((val) => {
      console.log(val);
      this.liveSalaryPerSecond = this.salaryPerSecond * (val + 1);
      this.liveTimer = val;
    });
  }
  
  ngOnDestroy() {
    this.timer$.unsubscribe();
  }

}
