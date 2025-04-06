import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}


@Component({
  selector: 'app-matchips',
  templateUrl: './matchips.component.html',
  styleUrls: ['./matchips.component.scss']
})


export class MatchipsComponent {
  // vegetables: Vegetable[] = [
  //   {name: 'apple'},
  //   {name: 'banana'},
  //   {name: 'strawberry'},
  //   {name: 'orange'},
  //   {name: 'kiwi'},
  //   {name: 'cherry'},
  // ];

  // drop(event: any) {
  //   console.log(event);
    
  //   moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  // }
}

function Logger(constructor:Function){
  console.log('logging the data');
  console.log(constructor);
  
}

@Logger
class Person {
  name : string = 'ajay';
  constructor() {
    console.log('creating object ....');
    
  }
}

// const person = new Person();
// console.log(person);
