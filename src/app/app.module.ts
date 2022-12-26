import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './routes/landing/landing.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './routes/login/login.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenuBarComponent,
    LineChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AuthModule.forRoot({
      domain: 'dev-f02qnk3ju7ajvsrv.us.auth0.com',
      clientId: 'ptnkn2KTeMLTfLuO2N6MSwa1MfnrHFwx'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MenuBarComponent,
    LineChartComponent
  ]
})


export class AppModule { }


