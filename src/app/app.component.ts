import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from './shared/utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(CONSTANTS.DEFAULT_LANG);
    this.translate.use(CONSTANTS.DEFAULT_LANG);
  }
  public userName = "Jean Francs"
  title = 'challenge-GBM';
}
