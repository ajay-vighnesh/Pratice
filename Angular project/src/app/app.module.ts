import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingComponent } from './training/training.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { EmailValidatorDirective } from './directive/highlight.directive';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassobjaComponent } from './classobja/classobja.component';
import { ClassobjbComponent } from './classobjb/classobjb.component';
import { ClassobjcComponent } from './classobjc/classobjc.component';





@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    EmailValidatorDirective,
    DirectiveExampleComponent,
    StudentComponent,
    HomeComponent,
    AboutComponent,
    ClassobjaComponent,
    ClassobjbComponent,
    ClassobjcComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
