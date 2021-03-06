import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-side-stats',
  templateUrl: './side-stats.component.html',
  styleUrls: ['./side-stats.component.scss']
})
export class SideStatsComponent implements OnInit, OnChanges {
  @Input() salary: number;
  @Input() liveSalaryPerSecond: number;
  @Input() liveTimer: number;
  @Input() salaryPerSecond: number;
  daysInCurrentYear: number;
  daysInCurrentMonth: number;
  salaryEndOfDay: number;
  salaryEndOfMonth: number;
  salaryEndOfYear: number;
  liveDaySalary: number;
  liveDayPercentage: number;
  liveMonthSalary: number;
  liveMonthPercentage: number;
  liveYearSalary: number;
  liveYearPercentage: number;

  constructor(private dateService: DateService) {
    this.daysInCurrentMonth = this.dateService.getNumberOfDaysInMonth();
    this.daysInCurrentYear = this.dateService.getNumberOfDaysInYear();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.liveDaySalary = this.currentSalaryToday();
    this.liveMonthSalary = this.currentSalaryMonth();
    this.liveYearSalary = this.currentSalaryYear();
    this.setSalaryEndOfDay();
    this.setSalaryEndOfMonth();
    this.setSalaryEndOfYear();
    
    setTimeout(() => {
      this.liveDayPercentage = this.dateService.getCurrentSecondsOfTheDay() * 100 / (60 * 60 * 24);
      this.liveMonthPercentage = this.dateService.getCurrentSecondsOfTheMonth() * 100 / (60 * 60 * 24 * this.daysInCurrentMonth);
      this.liveYearPercentage = this.dateService.getCurrentSecondsOfTheYear() * 100 / (60 * 60 * 24 * this.daysInCurrentYear);
    },1000);
  }
  
  currentSalaryToday() {
    return this.salaryPerSecond * this.dateService.getCurrentSecondsOfTheDay();
  }
  
  currentSalaryMonth() {
    return this.salaryPerSecond * this.dateService.getCurrentSecondsOfTheMonth();
  }
  
  currentSalaryYear() {
    const monthsPassed = new Date().getMonth(); // No +1 since we want the number of month passed
    const salaryForMonthsPassed = monthsPassed * this.salary;
    const currentSalaryMonth = this.currentSalaryMonth();

    return salaryForMonthsPassed + currentSalaryMonth;
  }

  setSalaryEndOfDay() {
    this.salaryEndOfDay = this.salaryPerSecond * 60 * 60 * 24;
  }

  setSalaryEndOfMonth() {
    this.salaryEndOfMonth = this.salaryPerSecond * 60 * 60 * 24 * this.dateService.getNumberOfDaysInMonth();
  }

  setSalaryEndOfYear() {
    this.salaryEndOfYear = this.salary * 12;
  }

}
