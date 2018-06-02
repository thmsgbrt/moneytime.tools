import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './container/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
