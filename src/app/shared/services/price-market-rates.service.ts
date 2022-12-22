import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URLS } from '../configuration/api-url';
import { IMarketRateModule, MarketRateModule } from '../models/market-rates.model';

@Injectable({
  providedIn: 'root'
})
export class PriceMarketRatesService {

  constructor(private _http: HttpClient) { }

  public getIndexMarketRates(): Observable<IMarketRateModule> {
    const uri = `${API_URLS.BASE_URL}${API_URLS.MARKET_RATES}`;
    return this._http.get(uri)
      .pipe(map((result: any) => result));
    // .pipe(map((result: any) => result.map((rate: IMarketRateModule) => new MarketRateModule(rate))));
  }
}
