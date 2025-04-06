import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: ` 
  <div>
      <button (click)="greet()">Greet</button>
      <button (click)="printAge()">Print Age</button>
    </div>
  `
 
})
export class ServicesComponent {

  private name: string;
  private age: number;

  constructor() {
    this.name = "Ron";
    this.age = 25;
  }

  greet() {
    console.log('start: greet');
    console.log(`Hello, my name is ${this.name}.`);
    console.log('end: greet');
  }

  printAge() {
    console.log('start: printAge');
    console.log(`I am ${this.age} years old`);
    console.log('end: printAge');
  }


}
