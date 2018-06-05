import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'home-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  salaryForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.salaryForm = new FormGroup({
      'salary': new FormControl(null, [
        Validators.required,
        this.valueTooLow.bind(this),
        this.valueTooHigh.bind(this),
        this.valueIsNotANumber.bind(this)
      ])
    });

    // this.salaryForm.statusChanges.subscribe(
    //   (status) => {
    //     console.log(status);
    //     console.log(this.salaryForm)
    //   }
    // );
  }

  valueTooLow(control: FormControl): {[s: string]: boolean} {
    if (control.value < 1000) {
      return {'valueTooLow': true};
    }
    return null;
  }

  valueTooHigh(control: FormControl): {[s: string]: boolean} {
    if (control.value > 1000000000) {
      return {'valueTooHigh': true};
    }
    return null;
  }

  valueIsNotANumber(control: FormControl): {[s: string]: boolean} {
    const onlyNumbersRegex = /^[0-9]*$/;
    if (!onlyNumbersRegex.test(control.value)) {
      return {'valueIsNotANumber': true};
    }
    return null;
  }

  onSubmit() {
    const salary = this.salaryForm.get('salary').value;
    if(this.salaryForm.valid) {
      this.router.navigate(['salary', salary]);
    };
  }

}
