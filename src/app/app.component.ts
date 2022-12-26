import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from './shared/utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    public auth: AuthService) {
    this.translate.setDefaultLang(CONSTANTS.DEFAULT_LANG);
    this.translate.use(CONSTANTS.DEFAULT_LANG);
  }
  title = 'GBM-challenge';

  ngOnInit(): void {
  }
}
