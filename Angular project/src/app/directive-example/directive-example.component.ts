import { Component } from '@angular/core';

// Component Directive //
@Component({
  selector: 'app-directive-example',
  // templateUrl: './directive-example.component.html',
  // styleUrls: ['./directive-example.component.scss']
  template: `<p>Hello , {{name }}</p>
  <p>{{ getMessage1() }}</p>
  <p>Function called {{ callCount }} times</p>
  <p>{{ birthday | date }}</p>
  `
})
export class DirectiveExampleComponent {

  callCount: number = 0;
  name = 'Angular';

  getMessage1(): string {
    console.log(this.callCount);
    this.callCount++; // Increment the call count
    return 'Hello, world!';
  }

  birthday: Date = new Date(2000, 10, 25);

  

}
