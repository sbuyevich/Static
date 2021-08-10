import { Routes } from '@angular/router';

import { AchHomeComponent } from './pages/ach-home/ach-home.component';
import { AchDashboardComponent, AchListComponent, AchSearchComponent } from './pages';

// export const APP_ROUTES: Routes = [
//   {
//     path: '',
//     component: AchHomeComponent
//   }, 
// ];


export const APP_ROUTES: Routes = [
  { path: '', component: AchHomeComponent },
  { path: 'ach/dashboard', component: AchDashboardComponent },
  { path: 'ach/search', component: AchSearchComponent },
  { path: 'ach/list', component: AchListComponent }
];