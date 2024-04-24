import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      // Define your form controls
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      // Add more form controls as needed
    });
  }

  onSubmit() {
    if (this.myForm.valid && this.myForm.value) {
      // Do something with the form data (e.g., send it to a server)
      console.log(this.myForm.value);
      
      
    } else {
      // Handle invalid form
      console.log(this.myForm);
      console.error("Form is invalid");
    }
  }



}
