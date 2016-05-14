import {Component, OnInit} from "@angular/core";
import { OnActivate, RouteSegment } from "@angular/router";
@Component({
    templateUrl: 'app/progress/progress.tpl.html'
})

export class ProgressComponent implements OnInit {
    bodyPart: string;

    constructor(private routeSegment: RouteSegment) {}

    ngOnInit():any {
        this.bodyPart = this.routeSegment.getParam('bodyPart');
    }

}