import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptorConfiguration } from '@azure/msal-angular'; // MsalGuard added to imports
import { PublicClientApplication, InteractionType } from '@azure/msal-browser'; // InteractionType added to imports

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AsideComponent } from '../aside/aside.component';
import { MaterialModule } from '../material-module';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

const publicClientApp = new PublicClientApplication({
  auth: {
    clientId: '91b33e37-3bce-447a-aaec-b6d35fc032e6',
    authority: 'https://login.microsoftonline.com/1a72c925-10ca-4b83-9f16-161e2ae1e200', 
    redirectUri: 'http://localhost:4200/'
    // clientId: 'f84871ee-ad13-4423-bcff-5673258e3815',
    // authority: 'https://login.microsoftonline.com/1a72c925-10ca-4b83-9f16-161e2ae1e200', 
    // redirectUri: 'http://localhost:4200/'
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
    MaterialModule,
    MsalModule.forRoot( publicClientApp, 
    {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration
        authRequest: {
          scopes: ['user.read']
        }
    }, 
    null as any)
  ],
  providers: [ MsalGuard ], // MsalGuard added as provider here],
  bootstrap: [AppComponent, MsalRedirectComponent]
})

export class AppModule { }
