import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent  {
  @Input() example;

  constructor(private router: Router) { }

  onClickExample() {
    this.router.navigate([this.example.link]);
  }

}
