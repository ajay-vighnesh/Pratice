import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  count:number = 0;
  intervalId: any;
  ngOnInit() {
    // Called after the component has been initialized
    this.intervalId = setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngOnDestroy() {
    // Called just before the component is destroyed
    clearInterval(this.intervalId);
  }
  
}
