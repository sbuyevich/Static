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

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;// set to true for IE 11

const publicClientApp = new PublicClientApplication({
  auth: {
    clientId: '20401f56-be3e-49c8-9a01-24151837dedb',
    authority: 'https://login.microsoftonline.com/82e1281a-0c2a-42ab-8394-0a68a0be66d0', 
    redirectUri: 'http://localhost:5555/'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE,
  }
});

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();   
  protectedResourceMap.set('https://localhost:5001/Ach/Get', ['api://7269ef6e-d77b-40e8-90c7-2f127151e1f7/ach.read']);
  protectedResourceMap.set('https://localhost:5001/Ach/Set', ['api://7269ef6e-d77b-40e8-90c7-2f127151e1f7/ach.write']);
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
    MsalModule.forRoot( publicClientApp, 
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
], // MsalGuard added as provider here],],      }
})
export class AchModule { }
