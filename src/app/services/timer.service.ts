import { Observable, interval } from "rxjs";

export class TimerService {
    start() {
        return interval(1000);
        // return new Observable((obs) => {
        //     setInterval(() => {
        //         obs.next('test');
        //     },1000);
        // })
    }

}