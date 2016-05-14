import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {HeaderComponent} from "./header/header.component";
import {ExerciseComponent} from "./exercise/exercise.component";
import {ProgressComponent} from "./progress/progress.component";


@Component({
    selector: 'my-app',
    template: `
        <gym-header></gym-header>
        <main class="container" id="begin">
            <a [routerLink]="['/exercise']">Exercise</a>
            <a>Stats</a>
        </main>
        <router-outlet></router-outlet>
    `,
    directives: [HeaderComponent, ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/exercise', component: ExerciseComponent},
    {path: '/progress/:bodyPart', component: ProgressComponent},
])
export class AppComponent {}
