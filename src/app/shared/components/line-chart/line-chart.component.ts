import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { IMarketRateModule } from '../../models/market-rates.model';
import { CONSTANTS } from '../../utils/constants';
import { GenerateLineChartModule } from './generaLineChart.model';

@Component({
  selector: 'GBM-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input() data: any = [{}];

  options: any = {};
  updateOptions: any;
  public marketsIndex: Array<IMarketRateModule> = [];
  public timeNewValue$: any = interval(1000);
  public last = 39_000;

  ngOnInit(): void {
    this.options = new GenerateLineChartModule({}, this.marketsIndex).options;
    this._generateNewValue();
  }
  private _generateNewValue() {

    this.timeNewValue$.subscribe({
      next: () => {
        this._generateRandomValue();
        this._updateData();
      }
    });
  }

  private _generateRandomValue() {
    let minutesChart = this._generateDate(this.marketsIndex.length, CONSTANTS.TIME_VALUES.MINUTES);
    const sum = this._random(2);
    const value = this._random(2000);

    this.last = sum ? (this.last + value) : (this.last - value);
    minutesChart += 60;
    const day = this._generateDate(minutesChart, CONSTANTS.TIME_VALUES.SECONDS);

    this.marketsIndex.length > 50 ?? this.marketsIndex.shift();

    this.last = this.last + this._random(500) - 100;

    this.marketsIndex.push({
      name: day,
      value: [day, this.last],
    });

  }

  private _generateDate(value: any, typeTime: string) {
    return (moment().add(value, typeTime)).format();
  }

  private _random(factor: number) {
    return Math.floor(Math.random() * factor)
  }

  private _updateData() {
    this.updateOptions = {
      series: [{
        data: this.marketsIndex
      }]
    };
  }

  ngOnDestroy(): void {
    this.timeNewValue$.unsubscribe();
  }

}
