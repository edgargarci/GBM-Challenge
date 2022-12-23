import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONSTANTS } from '../../utils/constants';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() user: string = "";
  public nick: string = '';

  constructor(public translate: TranslateService) {
    translate.addLangs(CONSTANTS.LANGS_LIST);
    translate.setDefaultLang(CONSTANTS.DEFAULT_LANG);
  }
  ngOnInit(): void {
    this._generateNick(this.user)
  }

  private _generateNick(name: string) {
    const nameFull = name.split(CONSTANTS.REG_EXP.SPACE);
    const [firstName, secondName] = nameFull;
    this.nick = secondName ? `${firstName.charAt(0)}${secondName.charAt(0)}` : `${firstName.charAt(0)}`
  }

}
