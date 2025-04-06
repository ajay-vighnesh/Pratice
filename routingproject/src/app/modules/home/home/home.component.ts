import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name : string = ""
  flag:boolean=false
  

  clickbtn(){
    this.flag = true;
    console.log('i am home ',this.name);
    
  }
}
