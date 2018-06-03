import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-live-earnings',
  templateUrl: './live-earnings.component.html',
  styleUrls: ['./live-earnings.component.css']
})
export class LiveEarningsComponent implements OnInit {
  @Input() liveSalaryPerSecond: number;
  @Input() liveTimer: number;

  constructor() { }

  ngOnInit() {
  }

}
