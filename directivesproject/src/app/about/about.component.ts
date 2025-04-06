import { Component } from '@angular/core';

// function logger(originalMethod: any) {
//   function replacementMethod(this: any, ...args: any[]) {
//     console.log("start:", originalMethod.name);
//     const result = originalMethod.call(this, ...args);
//     console.log("end:", originalMethod.name);
//     return result;
//   }

//   return replacementMethod;
// }

function logger(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  
  const originalMethod = descriptor.value;
  console.log(originalMethod,'originalMethod');
  

  descriptor.value = function(this: any, ...args: any[]) {
  console.log(descriptor.value,'descriptor.value');
  
    console.log("start:", originalMethod.name);
    const result = originalMethod.apply(this, args);
    console.log("end:", originalMethod.name);
    return result;
  };

  return descriptor;
}

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.scss']
// })

@Component({
  selector: 'app-about',
  template:  `
  <button (click)="greet()">Greet</button>
  <button (click)="printAge()">Print Age</button>
  <div>{{ output }}</div>
`
  
})



export class AboutComponent {

  name: string = "Ron";
  age: number = 25;
  output: string = '';

  constructor() {}


  @logger
  
  greet() {
    this.output = `Hello, my name is ${this.name}.`;
  }

  @logger
  printAge() {
    this.output = `I am ${this.age} years old`;
  }

}

