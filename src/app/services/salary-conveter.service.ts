import { Injectable } from "@angular/core";

import { DateService } from "./date.service";

@Injectable()
export class SalaryConverterService {
    constructor(private dateService: DateService) {}

    getSalaryPerSecondMonth(salary:number) {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const daysInCurrentMonth = this.dateService.getNumberOfDaysInMonth();
        return salary / daysInCurrentMonth / 24 / 60 / 60;
    }
}