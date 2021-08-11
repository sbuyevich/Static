import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ACH_ROUTES } from './ach-home.routes';
import { AchHomeComponent, AchDashboardComponent, AchListComponent, AchSearchComponent } from './';
import { AchNavComponent } from '../components';
import { MaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ACH_ROUTES),
    MaterialModule
  ],
  declarations: [
    AchNavComponent,
    AchHomeComponent,
    AchDashboardComponent, 
    AchListComponent, 
    AchSearchComponent
  ]
})
export class AchModule { }
