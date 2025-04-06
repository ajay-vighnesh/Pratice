import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.5)',
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]

})
export class AppComponent {
  state: string = 'small';

  toggleAnimation() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }

  
  
}
