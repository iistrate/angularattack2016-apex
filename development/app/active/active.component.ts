import {Component, OnInit} from "@angular/core";
import { OnActivate, RouteSegment, Router } from "@angular/router";
import {Exercise} from "../shared/exercise";
import {ExerciseService} from "../shared/exercise.service";
import {TimerService} from "../shared/timer.service";
import {Timer} from "../shared/timer";


@Component({
    templateUrl: 'app/active/active.tpl.html',
    providers: [ExerciseService, TimerService]
})

export class ActiveComponent implements OnInit {
    exercise: Exercise;
    isDone: boolean = false;
    timer: Timer;
    lap: Timer;
    set: string;
    timerHandler;
    lapHandler;

    constructor(private router: Router, private exerciseService: ExerciseService, private timerService: TimerService) {
        this.timer = new Timer();
        this.lap = new Timer();
    }

    onNextSet():void {
        this.isDone = this.exercise.sets-- === 0;
        this.set = String(this.exercise.sets);
        this.clearLapTimer();
    }

    onShowResults():void {

    }

    ngOnInit():any {
        this.exercise = this.exerciseService.removeFromQueue();
        this.set = String(this.exercise.sets);
        this.startTimer(1000);
        this.startLapTimer(1000);
    }

    startTimer(time:number):void {
        this.timerHandler = setInterval(function() {
            this.timerService.updateTimer(this.timer);
            this.timer.formatted = this.timerService.getTimer(this.timer);
        }.bind(this), time);
    }
    startLapTimer(time:number):void {
        this.lapHandler = setInterval(function() {
            this.timerService.updateTimer(this.lap);
            this.lap.formatted = this.timerService.getTimer(this.lap);
        }.bind(this), time);
    }

    clearLapTimer():void {
        this.lapHandler = 0;
        this.lap = new Timer();
    }

}