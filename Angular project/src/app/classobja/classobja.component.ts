import { Component } from '@angular/core';

@Component({
  selector: 'app-classobja',
  templateUrl: './classobja.component.html',
  styleUrls: ['./classobja.component.scss']
})
export class ClassobjaComponent {


  propertyA = "Property of Class A1";

  methodA() {
      console.log("Method of Class A");
      console.log('Ajay')
  }

}
