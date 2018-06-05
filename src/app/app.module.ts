import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { StatsBoardModule } from './stats-board/stats-board.module';
import { SalaryConverterService } from './services/salary-conveter.service';
import { DateService } from './services/date.service';
import { TimerService } from './services/timer.service';
import { Guard } from './services/guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    NotFoundModule,
    FooterModule,
    AppRoutingModule,
    StatsBoardModule,
    BrowserAnimationsModule
  ],
  providers: [SalaryConverterService, DateService, TimerService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
