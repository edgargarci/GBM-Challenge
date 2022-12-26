import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';
import { ILoginInfoModule, LoginInfoModule } from 'src/app/shared/models/login-info.model';
import { PriceMarketRatesService } from 'src/app/shared/services/price-market-rates.service';
import { CONSTANTS } from 'src/app/shared/utils/constants';
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

  language: string = CONSTANTS.DEFAULT_LANG;

  public userName: string = '';
  public additionalInfo: ILoginInfoModule = {};
  constructor(
    private _priceMarketRatesService: PriceMarketRatesService,
    public auth: AuthService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this._getMarketRates();

    this.auth.isAuthenticated$.subscribe({
      next: (isAuthenticated: boolean) => {
        console.log(isAuthenticated);

        !isAuthenticated ? this._redirectToLogin() : this._redirectToLanding();
        this._getUser();
      }, error: (error) => {
        console.error(error);
      }, complete: () => {

      }
    });
  }

  private _getUser() {
    this.auth.getUser().subscribe({
      next: (e) => {
        const userInfo = new LoginInfoModule(e);
        this.userName = userInfo.name;
        this.additionalInfo = userInfo;
      }
    });
  }

  private _redirectToLogin() {
    this._Router.navigate(['/login']);
  }

  private _redirectToLanding() {
    this._Router.navigate(['/landing']);
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
