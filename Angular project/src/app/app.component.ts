import { Component } from '@angular/core';
import { ClassobjcComponent } from '../app/classobjc/classobjc.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining2024';


  classCInstance: ClassobjcComponent;

    constructor() {
        this.classCInstance = new ClassobjcComponent(); // Create an instance of Class C
    }

    ngOnInit() {
        this.classCInstance.useClassA(); // Outputs: Property of Class A \n Method of Class A
        this.classCInstance.useClassB(); // Outputs: Property of Class B \n Method of Class B
    }

}
