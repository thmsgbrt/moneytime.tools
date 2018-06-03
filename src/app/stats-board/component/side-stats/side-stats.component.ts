import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-side-stats',
  templateUrl: './side-stats.component.html',
  styleUrls: ['./side-stats.component.css']
})
export class SideStatsComponent implements OnInit, OnChanges {
  @Input() liveSalaryPerSecond: number;
  @Input() liveTimer: number;
  @Input() salaryPerSecond: number;
  daysInCurrentYear: number;
  daysInCurrentMonth: number;
  salaryEndOfDay: number;
  liveDaySalary: number;
  liveDayPercentage: number;
  liveMonthSalary: number;
  liveMonthPercentage: number;
  liveYearSalary: number;
  liveYearPercentage: number;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.daysInCurrentMonth = this.dateService.getNumberOfDaysInMonth();
    this.daysInCurrentYear = this.dateService.getNumberOfDaysInYear();
    this.setSalaryEndOfDay();
  }

  ngOnChanges() {
    this.liveDaySalary = this.currentSalaryToday();
    this.liveDayPercentage = this.dateService.getCurrentSecondsOfTheDay() * 100 / (60 * 60 * 24);

    this.liveMonthSalary = this.currentSalaryMonth();
    this.liveMonthPercentage = this.dateService.getCurrentSecondsOfTheMonth() * 100 / (60 * 60 * 24 * this.daysInCurrentMonth);

    this.liveYearSalary = this.currentSalaryYear();
    this.liveYearPercentage = this.dateService.getCurrentSecondsOfTheYear() * 100 / (60 * 60 * 24 * this.daysInCurrentMonth * this.daysInCurrentYear);
  }

  currentSalaryToday() {
    return this.salaryPerSecond * this.dateService.getCurrentSecondsOfTheDay();
  }

  currentSalaryMonth() {
    return this.salaryPerSecond * this.dateService.getCurrentSecondsOfTheMonth();
  }

  currentSalaryYear() {
    return this.salaryPerSecond * this.dateService.getCurrentSecondsOfTheYear();
  }

  setSalaryEndOfDay() {
    this.salaryEndOfDay = this.salaryPerSecond * 60 * 60 * 24;
  }

}
