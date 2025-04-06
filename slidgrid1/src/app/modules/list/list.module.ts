import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',component:ListComponent},
];



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularSlickgridModule.forRoot()
  ],
  exports: [
    RouterModule,
  ]
})
export class ListModule { }
