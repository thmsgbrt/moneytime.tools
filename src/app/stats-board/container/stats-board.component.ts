import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { SalaryConverterService } from '../../services/salary-conveter.service';
import { TimerService } from '../../services/timer.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-stats-board',
  templateUrl: './stats-board.component.html',
  styleUrls: ['./stats-board.component.scss'],
  animations: [
    trigger('divFadeIn', [
      state('start', style({
        opacity: 0
      })),
      state('fadedIn', style({
        opacity: 1
      })),
      transition('start <=> fadedIn', animate('500ms ease-out')),
    ])
  ]
})
export class StatsBoardComponent implements OnInit, OnDestroy {
  timer$;
  salary:number;
  salaryPerSecond:number;
  liveSalaryPerSecond:number;
  liveTimer: number;
  state = 'start';

  constructor(private route: ActivatedRoute,
              private salaryConverter: SalaryConverterService,
              private timerService: TimerService) { }

  ngOnInit() {
    setTimeout(() => {
      this.state === 'start' ? this.state ="fadedIn" : this.state ="start";
    },400);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.salary = +params['salary'];
          this.salaryPerSecond = this.salaryConverter.getSalaryPerSecond(this.salary);
          // console.log('salaire', this.salaryPerSecond);
        }
      )

    this.timer$ = this.timerService.start().subscribe((val) => {
      // console.log(val);
      this.liveSalaryPerSecond = this.salaryPerSecond * (val + 1);
      this.liveTimer = val;
    });
  }
  
  ngOnDestroy() {
    this.timer$.unsubscribe();
  }

}
