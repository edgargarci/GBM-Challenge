import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'GBM-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() data: any = [{}];

  options: any;
  updateOptions: any;

  ngOnInit(): void {
    console.log(this.data);

    let data1: any = [];
    this.data.forEach((item: any) => {
      data1.push({
        name: item.date,
        value: [item.date, item.price],
        fullDate: moment(item.date)
      })
    });

    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: 39000,
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        type: 'line',
        showSymbol: false,
        emphasis: {
          line: false,
        },
        data: data1
      }]
    };
  }
}
