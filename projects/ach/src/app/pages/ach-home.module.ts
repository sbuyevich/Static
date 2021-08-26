import { PublicClientApplication, InteractionType, IPublicClientApplication } from '@azure/msal-browser'; // InteractionType added to imports
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ACH_ROUTES } from './ach-home.routes';
import { AchHomeComponent, AchDashboardComponent, AchListComponent, AchSearchComponent } from './';
import { AchNavComponent } from '../components';
import { MaterialModule } from '../material-module';
import { MsalGuard, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { AuthService } from 'projects/ach/src/app/auth-service';
import { environment } from '../../environments/environment';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;// set to true for IE 11

const publicClientApp = new PublicClientApplication({
  auth: {
    clientId: environment.sunnyPortalClientId,
    authority: 'https://login.microsoftonline.com/' + environment.sunnyPortalTenantId,
    redirectUri: environment.shellURL
  },  
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE,
  }
});

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set(environment.achApi.getUrl, [`api://${environment.achApi.clientId}/ach.read`]);
  protectedResourceMap.set(environment.achApi.setUrl, [`api://${environment.achApi.clientId}/ach.write`]);
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ACH_ROUTES),
    HttpClientModule,
    MaterialModule,
    MsalModule.forRoot(publicClientApp,
      {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration       
      },
      null as any)
  ],
  declarations: [
    AchNavComponent,
    AchHomeComponent,
    AchDashboardComponent,
    AchListComponent,
    AchSearchComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalGuard,
    AuthService
  ],
})
export class AchModule { }
