import {Component, OnInit} from "@angular/core";

import {statList} from "../shared/statList";
import {PieChartService} from "./PieChart.service";

@Component({
    templateUrl:'app/results/results.tpl.html',
    providers: [PieChartService]
})
export class ResultsComponent implements OnInit {

    constructor(private pieChartService: PieChartService) {
        this.pieChartService.createPieChart(300, 300, ['#e74c3c', '#2980b9', '#3498db', '#2c3e50'], statList[0].sets, '#pieChart');
    }

    ngOnInit():void {
        this.pieChartService.drawPieChart();
    }
}
