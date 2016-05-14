import {Component, OnInit} from "@angular/core";
import { OnActivate, RouteSegment, Router } from "@angular/router";
import {Exercise} from "../shared/exercise";
import {ExerciseService} from "../shared/exercise.service";

@Component({
    templateUrl: 'app/active/active.tpl.html',
    providers: [ExerciseService]
})

export class ActiveComponent implements OnInit {
    exercise: Exercise;

    constructor(private router: Router, private exerciseService: ExerciseService) {
    }

    ngOnInit():any {
        this.exercise = this.exerciseService.removeFromQueue();
        console.log(this.exercise)
    }
}