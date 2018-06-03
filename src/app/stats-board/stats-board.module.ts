import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsBoardComponent } from './container/stats-board.component';
import { LiveEarningsComponent } from './component/live-earnings/live-earnings.component';
import { SalaryFormatterPipe } from '../shared/salaryFormatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsBoardComponent, LiveEarningsComponent, SalaryFormatterPipe],
  exports: [
    StatsBoardComponent
  ],
})
export class StatsBoardModule { }
