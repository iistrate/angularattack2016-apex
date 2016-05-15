import {Component, OnInit} from "@angular/core";
import { OnActivate, RouteSegment, Router } from "@angular/router";

import {Exercise} from "../shared/exercise";
import {ExerciseService} from "../shared/exercise.service";

import {Timer} from "../shared/timer";
import {TimerService} from "../shared/timer.service";

import {Stat} from "../shared/stat";
import {StatListService} from "../shared/statList.service";


@Component({
    templateUrl: 'app/active/active.tpl.html',
    providers: [ExerciseService, TimerService, StatListService]
})

export class ActiveComponent implements OnInit {
    exercise: Exercise;
    isDone: boolean = false;
    timer: Timer;
    lap: Timer;
    set: string;
    setCount: number;
    setCounter: number;

    setsStat: Array<{}> = [];

    timerHandler;
    lapHandler;



    constructor(private router: Router, private exerciseService: ExerciseService, private timerService: TimerService, private statListService: StatListService) {
        this.timer = new Timer();
        this.lap = new Timer();
        this.exercise = this.exerciseService.removeFromQueue();
        this.setCount = this.exercise.sets;
        this.setCounter = 1;
    }

    onNextSet():void {

        this.setsStat.push({
            set: this.setCounter,
            lapTime : this.lap.formatted
        });

        this.isDone = this.setCount-- === 1;
        this.set = String(this.setCount);
        this.setCounter++;

        this.clearLapTimer();
        if (this.isDone) {
            this.stopTimer();
        }
    }

    onShowResults():void {
        this.statListService.insertStat(new Stat(this.exercise, this.setsStat));
        this.router.navigate(['/results']);
    }

    ngOnInit():any {
        this.set = String(this.exercise.sets);
        this.startTimer(1000);
        this.startLapTimer(1000);
    }

    /*
    * Timer functions
    */
    startTimer(time:number):void {
        this.timerHandler = setInterval(function() {
            this.timerService.updateTimer(this.timer);
            this.timer.formatted = this.timerService.getTimer(this.timer);
        }.bind(this), time);
    }

    stopTimer():void {
        clearInterval(this.timerHandler);
    }

    startLapTimer(time:number):void {
        this.lapHandler = setInterval(function() {
            this.timerService.updateTimer(this.lap);
            this.lap.formatted = this.timerService.getTimer(this.lap);
        }.bind(this), time);
    }

    clearLapTimer():void {
        clearInterval(this.lapHandler);
        this.startLapTimer(1000);
        this.lap = new Timer();
    }

}