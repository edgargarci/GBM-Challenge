import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
    private _Router: Router) { }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe({
      next: (isAuthenticated: boolean) => {
        isAuthenticated && this._redirectToLanding();
      }, error: (error) => {
        console.error(error);
      }
    });
  }

  private _redirectToLanding() {
    this._Router.navigate(['/landing']);
  }

}
