import {Component} from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {ExerciseComponent} from "./exercise/exercise.component";


@Component({
    selector: 'my-app',
    template: `
        <gym-header></gym-header>
        <gym-exercise></gym-exercise>

    `,
    directives: [HeaderComponent, ExerciseComponent]
})


export class AppComponent {}
