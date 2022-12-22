import * as moment from "moment";

export interface IMarketRateModule {
    date: moment.Moment | string;
    price: number;
    percentageChange: number;
    volume: number;
    change: number;
    value?: [string, number];
    name?: string
}

export class MarketRateModule implements IMarketRateModule {
    public date: moment.Moment | string = moment();
    public price: number = 0;
    public percentageChange: number = 0;
    public volume: number = 0;
    public change: number = 0;
    public value: [string, number] = ['', 0];
    public name: string;

    constructor(item: IMarketRateModule) {
        this.date = moment(item.date).format('LTS');
        this.price = item.price;
        this.percentageChange = item.percentageChange;
        this.volume = item.volume;
        this.change = item.change;
        this.value = [this.date, item.price];
        this.name = this.date
    }
}