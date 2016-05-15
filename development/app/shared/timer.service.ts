import {Injectable} from "@angular/core";
import {Timer} from "./timer";

@Injectable()

export class TimerService {


    getTimer(timer: Timer):string {
        return timer.formatted;
    }

    updateTimer(timer: Timer):void {
        timer.seconds++;
        if (timer.seconds % 60 === 0) {
            timer.seconds = 0;
            timer.minutes++;
            if (timer.minutes % 60 === 0) {
                timer.minutes = 0;
                timer.hours++;
                if (timer.hours % 24 === 0) {
                    timer.hours = 0;
                }
            }
        }
        let fSeconds = timer.seconds > 10 ? ''+timer.seconds : '0'+timer.seconds;
        let fMinutes = timer.minutes > 10 ? ''+timer.minutes : '0'+timer.minutes;
        let fHours = timer.hours > 10 ? ''+timer.hours : '0'+timer.hours;

        timer.formatted = fHours + ':' + fMinutes + ':' + fSeconds;

        timer.elapsed +=10;
    }
}
