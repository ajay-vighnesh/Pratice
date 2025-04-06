import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routingproject';
  data:any = {name:'ajay'}

  constructor(private router:Router){}
 
  homelink(){
    this.router.navigate(['home'],
      {
        skipLocationChange:true,
        queryParams:{data : JSON.stringify(this.data)}
      }
    )
  }
}
