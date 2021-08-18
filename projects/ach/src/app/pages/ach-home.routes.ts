import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchDashboardComponent, AchListComponent, AchSearchComponent,AchHomeComponent } from './';

export const ACH_ROUTES: Routes = [
  { path: '', component: AchHomeComponent },
  { path: 'dashboard', component: AchDashboardComponent },
  { path: 'search', component: AchSearchComponent },
  { path: 'list', component: AchListComponent }
];


