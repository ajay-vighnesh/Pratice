import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclasses',
  standalone: true,
  imports: [],
  templateUrl: './ngclasses.component.html',
  styleUrl: './ngclasses.component.css'
})
export class NgclassesComponent {

  isActive: boolean = false;
  isSpecial: boolean = true;
  
  toggleActive() {
    this.isActive = !this.isActive;
  }

}
