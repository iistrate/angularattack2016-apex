import {Component} from "@angular/core";

import {statList} from "../shared/statList";

@Component({
    template: `
        <main id="history" class="container">
            <h1>Here's your exercise history.</h1>
            <template [ngIf]="stats">
                <ul >
                    <li *ngFor="let item of stats">
                        <p>
                            {{item.exercise.description}}
                        </p>
                            Sets: <span>{{item.exercise.sets}}</span>
                            <ul>
                                <li *ngFor="let set of item.sets">
                                    Set {{set.set}} lasted {{set.lapTime}}
                                </li>
                            </ul>
                        <div>
                            Reps: <span>{{item.exercise.reps}}</span>
                            Weight: <span>{{item.exercise.weight}} lbs</span>
                            Total time: <span>{{item.sets['0'].total.formatted}}</span>
                        </div>
                    </li>
                </ul>
            </template>
            <template [ngIf]="!stats.length">
                <p>
                    Sorry, there's nothing to see here! Complete exercises to view list.
                </p>
            </template>

        </main>
    `,
})

export class HistoryComponent {
    stats: Array<{}>;
    constructor() {
        this.stats = statList;
    }
}