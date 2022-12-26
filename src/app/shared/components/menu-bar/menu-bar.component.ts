import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';
import { ILoginInfoModule } from '../../models/login-info.model';
import { CONSTANTS } from '../../utils/constants';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() user: string = '';
  @Input() additionalInfo: ILoginInfoModule = {};
  public nick: string = '';

  constructor(
    public translate: TranslateService,
    public auth: AuthService,
    private _Router: Router) {
    translate.addLangs(CONSTANTS.LANGS_LIST);
    translate.setDefaultLang(CONSTANTS.DEFAULT_LANG);
  }

  ngOnInit(): void {
    this._generateNick(this.user);
  }

  private _generateNick(name: string) {
    const nameFull = name.split(CONSTANTS.REG_EXP.SPACE);
    const [firstName, secondName] = nameFull;
    this.nick = secondName ? `${firstName.charAt(0)}${secondName.charAt(0)}` : `${firstName.charAt(0)}`
  }

  public closeSession() {
    this.auth.logout();
    this._Router.navigate(['/login'])
  }



}
