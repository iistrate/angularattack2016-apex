import {Injectable} from "@angular/core";
import {statList} from "../shared/statList";

@Injectable()
export class PieChartService {
    pieChart: PieChart;
    selector: string;

    createPieChart(w:number, h: number, c: Array <string>, d: Array <{}>, s:string) {
        this.pieChart = new PieChart(w, h, c, d, s);
    }

    drawPieChart() {
        let pie = d3.layout.pie()
            .value(function (d) {
                return d.time;
            });
        let arc = d3.svg.arc()
            .outerRadius(this.pieChart.radius);

        let myChart = d3.select(this.pieChart.selector).append('svg')
            .attr('width', this.pieChart.width)
            .attr('height', this.pieChart.height)
            .append('g')
            .attr('transform', 'translate(' + (this.pieChart.width - this.pieChart.radius) + ',' + (this.pieChart.height - this.pieChart.radius) + ')')
            .selectAll('path').data(pie(this.pieChart.data))
            .enter().append('path')
            .transition().delay(500)
            .attr('fill', function (d, i) {
                return this.pieChart.colors[i];
            }.bind(this))
            .attr('d', arc);

        let legend = d3.select(this.pieChart.selector).append('ol');
        legend.selectAll('li').data(this.pieChart.data).enter()
            .append('li').text(function (data) { return "Set "+data.set+ " Lap time: " +data.lapTime; });

    }

}

class PieChart {
    width: number;
    height: number;
    radius: number;
    colors: Array<string>;
    data: Array<{}>;
    selector: string;

    constructor(w:number, h: number, c: Array <string>, d: Array <{}>, s:string) {
        this.width = w;
        this.height = h;
        this.radius = this.width / 2;

        this.colors = c;
        this.data = d;

        this.selector = s;
    }

}