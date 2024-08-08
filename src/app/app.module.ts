import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { provideAuth0 } from '@auth0/auth0-angular';
import { env } from '../env/env';
import { RouterOutlet } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { EmissionFactorState } from './emission-factor/state/emission-table.state';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    RouterOutlet,
    NgxsModule.forRoot(
      [
        EmissionFactorState
      ],
      {
      developmentMode: false,
    }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAuth0({
      domain: env.AUTH0_DOMAIN,
      clientId: env.AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
})
export class AppModule {}
