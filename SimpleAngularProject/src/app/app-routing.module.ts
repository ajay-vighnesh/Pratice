import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductComponent},
  {path:'product1/:id',component:Product1Component},
  {path:'product2/:id',component:Product2Component},
  {path:'',component:LoginComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
