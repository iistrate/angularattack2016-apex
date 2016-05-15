import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {statList} from "../shared/statList";
import {PieChartService} from "./PieChart.service";

@Component({
    templateUrl:'app/results/results.tpl.html',
    providers: [PieChartService]
})
export class ResultsComponent implements OnInit {

    constructor(private pieChartService: PieChartService, private router: Router) {
        this.pieChartService.createPieChart(300, 300,
            ['#e74c3c', '#2980b9', '#3498db', '#2c3e50', '#000000', '#ffffff', '#FFCF15', '#573D7D', '#FF5F91', '#532C00'],
            statList[statList.length-1].sets, '#pieChart');
    }

    ngOnInit():void {
        this.pieChartService.drawPieChart();
    }

    onSaveStat() {
        this.router.navigate(['/']);
    }
    onDiscard() {
        statList.shift();
        this.router.navigate(['/']);
    }

}
