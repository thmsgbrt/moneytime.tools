import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsBoardComponent } from './container/stats-board.component';
import { LiveEarningsComponent } from './component/live-earnings/live-earnings.component';
import { SalaryFormatterPipe } from '../shared/salaryFormatter.pipe';
import { SideStatsComponent } from './component/side-stats/side-stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsBoardComponent, LiveEarningsComponent, SalaryFormatterPipe, SideStatsComponent],
  exports: [
    StatsBoardComponent
  ],
})
export class StatsBoardModule { }
