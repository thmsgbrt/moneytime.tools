import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent  {
  @Input() example;
  @Output() restartTimer: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  onClickExample() {
    this.router.navigate([this.example.link]);
    this.restartTimer.emit();
  }
}