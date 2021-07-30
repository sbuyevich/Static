import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AchRoutingModule } from './ach/ach-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { AsideComponent } from './aside/aside.component';
import { AchModule } from './ach';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    FooterComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    CoreModule,
    AchRoutingModule,  
    AchModule,
    SharedModule,
    AppRoutingModule,  
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
