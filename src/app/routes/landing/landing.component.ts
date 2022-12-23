import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { PriceMarketRatesService } from 'src/app/shared/services/price-market-rates.service';
@Component({
  selector: 'GBM-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  options: any;
  updateOptions: any;

  public rateList: any = null;
  public loadingPrices = true;
  public errorService = false;

  language: string = 'en';

  constructor(
    private _priceMarketRatesService: PriceMarketRatesService,
  ) {

  }

  ngOnInit(): void {
    this._getMarketRates();
  }

  private _getMarketRates() {
    this.loadingPrices = true;
    this._priceMarketRatesService.getIndexMarketRates().pipe(take(1)).subscribe({
      next: (resp) => {
        this.rateList = resp;
      },
      error: (error) => {
        this.errorService = true;
        console.error(error);
      },
      complete: () => {
        this.loadingPrices = false;
      }
    });
  }


}
