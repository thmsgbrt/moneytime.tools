import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './container/header.component';
import { LogoComponent } from './component/logo/logo.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
