import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-live-earnings',
  templateUrl: './live-earnings.component.html',
  styleUrls: ['./live-earnings.component.css']
})
export class LiveEarningsComponent implements OnInit, OnChanges {
  @Input() liveSalaryPerSecond: number;
  @Input() liveTimer: number;
  chronometer: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.liveTimer != undefined) {
      this.chronometer = new Date(this.liveTimer * 1000).toISOString().substr(11, 8);
    }
  }

}
