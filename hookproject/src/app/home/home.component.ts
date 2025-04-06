import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnChanges {
  
  ngOnDestroy(): void {
    console.log('i am destroy')
  }
  ngOnChanges(changes: SimpleChanges): void {
   
    
  }

}
