import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormatter'
})
export class SalaryFormatterPipe implements PipeTransform {
    
    transform(value: any) {
        // If Value is undefined at first.
        if (!value) {
            return value;
        }
        
        // 120 000
        // 1 200,00
        // 10,001
        let returningString;
        if (value > 100000) {
            let salary = Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            returningString = `<span class="salary--noticeable">${salary}</span>`;
        } else if (value > 1000) {
            let salary = value.toFixed(2);
            let salarySplited = salary.split('.');
            salarySplited[0] = salarySplited[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            returningString = `<span class="salary--noticeable">${salarySplited[0]},</span><span class="salary--negligible">${salarySplited[1]}</span>`;
        } else {
            let salary = value.toFixed(5);
            let salarySplited = salary.split('.');
            salarySplited[0] = salarySplited[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            salarySplited.push(salarySplited[1].slice(0,2));
            salarySplited.push(salarySplited[1].slice(2,3));
            returningString = `<span class="salary--noticeable">${salarySplited[0]},</span><span class="salary--negligible">${salarySplited[2]}<span class="salary--evenMoreNegligible">${salarySplited[3]}</span></span>`;
        }
    return `<span class="yolo">${returningString} €</span>`;
  }
}
