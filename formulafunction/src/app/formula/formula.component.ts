import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent {
  num1!:number;
  num2!:number;
  operation!:string;

  // Switch Case Dynamic Start

  // performoperation(){
  //   switch(this.operation){
  //     case 'add':
  //       return this.num1 + this.num2;
  //       case 'subtract':
  //         return this.num1 - this.num2;
  //         case 'multiply':
  //           return this.num1 * this.num2;
  //         case 'divide':
  //           return this.num1 / this.num2;
  //         default:
  //           return 0;
  //   }
  // }

  // Switch Case Dynamic End

  // Without Switch Case Dynamic Start 

  performoperation() {
    if (this.num1 !== undefined && this.num2 !== undefined && this.operation) {
    console.log(this.num1,'num1');
    console.log(this.num2,'num2');
    console.log(this.operation,'operation');
     
      
      // Use dynamic property access to perform the operation
      const operationFunction = {
        'add': () => this.num1 + this.num2,
        'subtract': () => this.num1 - this.num2,
        'multiply': () => this.num1 * this.num2,
        'divide': () => this.num1 / this.num2
      }[this.operation];
      console.log(operationFunction,'operationFunction');
      console.log(this.operation,'this.operation');
      

      // Check if the selected operation exists, then execute it
      if (operationFunction) {
        return operationFunction();
      } else {
        return 0; // Default return if operation is not supported
      }
    } else {
      return 0; // Default return if input is incomplete
    }
  }

  // Without Switch Case Dynamic End 

}
