import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SampleComponent,
  ],
  exports: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TrainingformModule { }
