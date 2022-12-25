import * as moment from "moment";

export interface IMarketRateModule {
    date?: moment.Moment | string;
    price?: number;
    percentageChange?: number;
    volume?: number;
    change?: number;
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
        this.price = item.price ?? 0;
        this.percentageChange = item.percentageChange ?? 0;;
        this.volume = item.volume ?? 0;;
        this.change = item.change ?? 0;;
        this.value = [this.date, item.price ?? 0];
        this.name = this.date
    }
}