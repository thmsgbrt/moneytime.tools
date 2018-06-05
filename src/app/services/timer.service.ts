import { Observable, interval } from "rxjs";

export class TimerService {
    start() {
        return interval(1000);
    }

}