import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchipsComponent } from './matchips/matchips.component';
import { HomeComponent } from './home/home.component';
import { FormulaComponent } from './formula/formula.component';


const routes: Routes = [
  {path:'about',component:MatchipsComponent},
  {path:'formula',component:FormulaComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
