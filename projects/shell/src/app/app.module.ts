import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  MsalModule,
  MsalService,
  MsalInterceptor,  
  MsalGuard,  
  MsalBroadcastService, 
  MsalRedirectComponent,
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,  
  MsalInterceptorConfiguration
} from "@azure/msal-angular";

//import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptorConfiguration, MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular'; // MsalGuard added to imports
import { PublicClientApplication, InteractionType, IPublicClientApplication } from '@azure/msal-browser'; // InteractionType added to imports

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AsideComponent } from '../aside/aside.component';
import { MaterialModule } from '../material-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth-service';

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

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,    
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(APP_ROUTES),
    ModuleFederationToolsModule,
    HttpClientModule,
    MaterialModule,
    MsalModule.forRoot( publicClientApp, 
    {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration     
    }, 
    null as any)
  ],
  providers: [ 
    MsalGuard,
    AuthService 
  ], 
  bootstrap: [AppComponent, MsalRedirectComponent]
})

export class AppModule { }
