import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { MsalGuard } from '@azure/msal-angular';


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
    canActivate: [MsalGuard]
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {      
      remoteName: 'react_app',
      exposedModule: './web-components',
      elementName: 'react-app'
    } as WebComponentWrapperOptions
  },   
  {
    path: 'mf',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },   
    
];

