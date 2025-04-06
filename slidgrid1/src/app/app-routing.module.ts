import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'view', loadChildren:() => import ('./modules/view/view.module').then(module => module.ViewModule)},
  {path:'home',loadChildren:() => import ('./modules/list/list.module').then(module => module.ListModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
