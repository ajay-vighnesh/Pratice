import { Component } from '@angular/core';
import { ClassobjaComponent } from '../classobja/classobja.component';
import { ClassobjbComponent } from '../classobjb/classobjb.component';



@Component({
  selector: 'app-classobjc',
  templateUrl: './classobjc.component.html',
  styleUrls: ['./classobjc.component.scss']
})
export class ClassobjcComponent {


  private classAInstance = new ClassobjaComponent(); 
    private classBInstance = new ClassobjbComponent(); 

    useClassA() {
        console.log(this.classAInstance.propertyA); 
        this.classAInstance.methodA(); 
    }

    useClassB() {
        console.log(this.classBInstance.propertyB); 
        this.classBInstance.methodB(); 
    }

}
