import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HeaderComponent} from "./header/header.component";
import {ExerciseComponent} from "./exercise/exercise.component";
import {ProgressComponent} from "./progress/progress.component";
import {ActiveComponent} from "./active/active.component";
import {ResultsComponent} from "./results/results.component";


@Component({
    selector: 'my-app',
    template: `
        <gym-header></gym-header>
        <nav class="container" id="begin">
            <ul>
                <li><a [routerLink]="['/exercise']" class="button">Exercise</a></li>
                <li><a [routerLink]="['/active']" class="button">Active</a></li>
                <li><a class="button">Stats</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [HeaderComponent, ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/', component: ExerciseComponent},
    {path: '/exercise', component: ExerciseComponent},
    {path: '/progress/:bodyPart', component: ProgressComponent},
    {path: '/active', component: ActiveComponent},
    {path: '/results', component: ResultsComponent}
])
export class AppComponent {}
