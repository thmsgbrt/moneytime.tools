import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home.component';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    FormComponent
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
