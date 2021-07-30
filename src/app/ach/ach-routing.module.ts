import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AchHomeComponent, 
  AchListComponent, 
  AchDashboardComponent,  
  AchSearchComponent
} from './pages';

const routes: Routes = [
  { path: 'ach', component: AchHomeComponent },
  { path: 'ach/dashboard', component: AchDashboardComponent },
  { path: 'ach/search', component: AchSearchComponent },
  { path: 'ach/list', component: AchListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchRoutingModule { }
