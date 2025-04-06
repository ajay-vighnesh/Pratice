import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {path:'home', loadChildren:() => import('./modules/home/home.module').then(module => module.HomeModule)},
  {path:'about',loadChildren:() => import('./modules/about/about.module').then(module => module.AboutModule)},
  {path:'contact',loadChildren:() => import('./modules/contact/contact.module').then(module => module.ContactModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',loadChildren:() => import('./modules/pagenotfound/pagenotfound.module').then(module => module.PagenotfoundModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
