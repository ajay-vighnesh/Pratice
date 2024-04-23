import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path:'about',component:AboutComponent, pathMatch:'full'},
  {path:'home',component:HomeComponent, pathMatch:'full'},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**', redirectTo:'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
