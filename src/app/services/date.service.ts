export class DateService {
    getNumberOfDaysInMonth(month: number, year:number) {
        return new Date(year, month, 0).getDate();
    }
}