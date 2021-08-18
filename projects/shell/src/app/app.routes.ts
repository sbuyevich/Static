import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { MsalGuard } from '@azure/msal-angular';
import { RoleGuardService } from './auth-guard-service';


export const APP_ROUTES: Routes = [   
  {
    path: 'ach',
    loadChildren: () => {
      return loadRemoteModule({
        remoteName: 'ach',
        exposedModule: './Module'
      })
      .then(m => m.AchModule) 
    },      
    canActivate: [RoleGuardService],
    data: { 
      expectedRole: 'ach.'
    } 
  }  
];

