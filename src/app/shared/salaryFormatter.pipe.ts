import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormatter'
})
export class SalaryFormatterPipe implements PipeTransform {
    
    transform(value: any) {
        // If Value is undefined at first.
        value = !value ? '0' : value;
        
        // 120 000
        // 1 200,00
        // 10,001
        let returningString;
        if (value > 100000) {
            let salary = Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            returningString = `<span class="livesalary--noticeable">${salary}</span>`;
        } else if (value > 100) {
            let salary = value.toFixed(2);
            let salarySplited = salary.split('.');
            salarySplited[0] = salarySplited[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            returningString = `<span class="livesalary--noticeable">${salarySplited[0]}</span><span class="livesalary--negligible">.${salarySplited[1]}</span>`;
        } else if (value > 0) {
            let salary = value.toFixed(6);
            let salarySplited = salary.split('.');
            salarySplited[0] = salarySplited[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            salarySplited.push(salarySplited[1].slice(0,2));
            salarySplited.push(salarySplited[1].slice(2,4));
            returningString = `<span class="livesalary--noticeable">${salarySplited[0]}</span><span class="livesalary--negligible">.${salarySplited[2]}<span class="livesalary--evenMoreNegligible">${salarySplited[3]}</span></span>`;
        } else {
            returningString = `<span class="livesalary--noticeable">${value}</span>`;
        }
    return `<span class="liveSalary">${returningString} €</span>`;
  }
}
