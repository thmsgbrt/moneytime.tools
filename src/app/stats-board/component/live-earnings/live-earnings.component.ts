import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-live-earnings',
  templateUrl: './live-earnings.component.html',
  styleUrls: ['./live-earnings.component.scss']
})
export class LiveEarningsComponent implements OnInit, OnChanges {
  @Input() liveSalaryPerSecond: number;
  @Input() liveTimer: number;
  @Output() restartLiveTimer: EventEmitter<any> = new EventEmitter()
  chronometer: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.liveTimer != undefined) {
      this.chronometer = new Date(this.liveTimer * 1000).toISOString().substr(11, 8);
    }
  }

  onClickRestart() {
    this.restartLiveTimer.emit();
  }

}
