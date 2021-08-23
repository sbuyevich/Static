import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchDashboardComponent, AchListComponent, AchSearchComponent,AchHomeComponent } from './';

export const ACH_ROUTES: Routes = [
  { path: '', component: AchHomeComponent, data: {title: 'ACH'} },
  { path: 'dashboard', component: AchDashboardComponent, data: {title: 'ACH-Dashboard'} },
  { path: 'search', component: AchSearchComponent, data: {title: 'ACH-Search'} },
  { path: 'list', component: AchListComponent, data: {title: 'ACH-List'} }
];


