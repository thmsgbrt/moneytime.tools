export class DateService {
    getNumberOfDaysInYear() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return (Date.UTC(currentYear + 1, 0, 1) - Date.UTC(currentYear, 0, 1)) / 24 / 60 / 60 / 1000; 
    }

    getNumberOfDaysInMonth(month?: number, year?:number) {
        if (month === undefined) {
            const date = new Date();
            const currentYear = date.getFullYear();
            const currentMonth = date.getMonth() + 1;
            return new Date(currentYear, currentMonth, 0).getDate();    
        }
        return new Date(year, month, 0).getDate();
    }

    getCurrentSecondsOfTheDay() {
        const date = new Date();
        const currentHours = date.getHours();
        const currentMinutes = date.getMinutes();
        const currentSeconds = date.getSeconds();
        return currentSeconds + (60 * currentMinutes) + (60 * 60 * currentHours);
    }

    getCurrentSecondsOfTheMonth() {
        const date = new Date();
        const currentDay = date.getDate();
        const currentSecondsOfDay = this.getCurrentSecondsOfTheDay();

        if (currentDay === 1) {
            return currentSecondsOfDay;
        } else {
            return 86400 * currentDay + currentSecondsOfDay; 
        }
    }

    getCurrentSecondsOfTheYear() {
        const date = new Date();
        const currentMonth = date.getMonth() + 1;
        const daysInMonth = this.getNumberOfDaysInMonth();
        const currentSecondsOfMonth = this.getCurrentSecondsOfTheMonth();        

        if (currentMonth === 1) {
            return currentSecondsOfMonth;
        } else {
            return 86400 * daysInMonth * currentMonth + currentSecondsOfMonth; 
        }
    }
}