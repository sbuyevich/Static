import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent, LoginComponent  } from './shared';
import { HomeComponent } from './home/pages/home/home.component';


const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }