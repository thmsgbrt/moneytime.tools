import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsBoardComponent } from './container/stats-board.component';
import { LiveEarningsComponent } from './component/live-earnings/live-earnings.component';
import { SalaryFormatterPipe } from '../shared/salaryFormatter.pipe';
import { SideStatsComponent } from './component/side-stats/side-stats.component';
import { SalaryExamplesComponent } from './component/salary-examples/salary-examples.component';
import { ExampleComponent } from './component/salary-examples/example/example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsBoardComponent, LiveEarningsComponent, SalaryFormatterPipe, SideStatsComponent, SalaryExamplesComponent, ExampleComponent],
  exports: [
    StatsBoardComponent
  ],
})
export class StatsBoardModule { }
