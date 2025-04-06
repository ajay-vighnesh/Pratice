import { Component } from '@angular/core';

@Component({
  selector: 'app-classobjb',
  templateUrl: './classobjb.component.html',
  styleUrls: ['./classobjb.component.scss']
})
export class ClassobjbComponent {


  propertyB = "Property of Class B";

    methodB() {
        console.log("Method of Class B");
    }

}
