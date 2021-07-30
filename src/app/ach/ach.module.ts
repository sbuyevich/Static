import { NgModule } from '@angular/core';
import { AchRoutingModule } from './ach-routing.module';

import { 
  AchDashboardComponent, 
  AchNavComponent, 
  AchHomeComponent, 
  AchListComponent, 
  AchSearchComponent
} from './pages';

//import { SharedModule } from '../shared';

@NgModule({
  imports: [
    AchRoutingModule,
  //  SharedModule
  ],
  providers: [
  ],
  declarations: [
    AchNavComponent, 
    AchHomeComponent, 
    AchDashboardComponent, 
    AchSearchComponent,
    AchListComponent
  ]
})
export class AchModule { }
