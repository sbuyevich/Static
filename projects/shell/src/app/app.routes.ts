import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';


let URL = 'http://localhost:3333/remoteEntry.js';

export const APP_ROUTES: Routes = [  
  // Your route here:
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full'
  // },
  
  // Local usage
  {
    path: 'ach',
    loadChildren: () => {
      return loadRemoteModule({
        //remoteEntry: URL,
        remoteName: 'ach',
        exposedModule: './Module'
      })
      .then(m => m.AchModule) 
    }      
  },

  // {
  //   path: 'ach',
  //   loadChildren: () => {
  //     return loadRemoteModule({
  //       //remoteEntry: URL,
  //       remoteName: 'ach',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.HomeModule) 
  //   }      
  // },


  // {
  //     path: 'ach',
  //     loadChildren: () => {
  //       return loadRemoteModule({
  //         remoteEntry: 'https://brave-glacier-0ffc18c10.azurestaticapps.net/remoteEntry.js',
  //         remoteName: 'ach',
  //         exposedModule: './Module'
  //       })
  //       .then(m => m.FlightsModule) }
  //   },
];

