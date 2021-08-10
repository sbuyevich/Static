import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AsideComponent } from '../aside/aside.component';
import { MaterialModule } from '../material-module';

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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
