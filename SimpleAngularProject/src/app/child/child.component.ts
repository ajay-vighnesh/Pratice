import { Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template : `    <h2>Example Component For Init and Destroy</h2>
  <ul>
    <li *ngFor="let item of data">{{ item }}</li>
  </ul>
`,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit , OnDestroy {

  data: string[] = ['Item 1', 'Item 2', 'Item 3','Item4'];

constructor() {}
ngOnInit() {
  console.log('Component initialized.');
  console.log('Data fetched:', this.data);
}
ngOnDestroy() {
  console.log('Component destroyed.');
  console.log('Data deleted:', this.data);
  this.data = [];
}

}
