import {Component, OnInit} from "@angular/core";
import { OnActivate, RouteSegment, Router } from "@angular/router";
import {Exercise} from "../shared/exercise";
import {ExerciseService} from "../shared/exercise.service";
@Component({
    templateUrl: 'app/progress/progress.tpl.html',
    providers: [ExerciseService]
})

export class ProgressComponent implements OnInit {
    bodyPart: string;

    constructor(private routeSegment: RouteSegment, private router: Router, private exerciseService: ExerciseService) {}

    ngOnInit():any {
        this.bodyPart = this.routeSegment.getParam('bodyPart');
    }

    onSubmit(f) {
        this.exerciseService.addToQueue(new Exercise(
            f.controls['description'].value,
            +f.controls['sets'].value,
            +f.controls['reps'].value,
            +f.controls['weight'].value
        ));
        this.router.navigate(['/active']);
    }
}