import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsBoardComponent } from './container/stats-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatsBoardComponent],
  exports: [
    StatsBoardComponent
  ],
})
export class StatsBoardModule { }
