import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipeproject';

  name:string = "ajay";
  name1:string = "AJAY  ";
  today :any =  Date();
  price: number = 55;
  constructor(){
    
  }
}
