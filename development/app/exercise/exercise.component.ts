import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';


@Component({
    selector: 'gym-exercise',
    templateUrl: 'app/exercise/exercise.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/exercise', component: ExerciseComponent},
])
export class ExerciseComponent {}
