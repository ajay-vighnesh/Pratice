import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

// Property binding //
  itemImageUrl = '../assets/directive_image_3.jpg';
// Property binding //

// Attribute Binding //
actionName: string = 'Click'; // You can set the actionName to any appropriate value
// Attribute Binding //

// Event Binding //
onSave(){
  console.log('saved');
  
}
// Event Binding //

  onClicked(event: { target: any; }) {
    console.log(event);
}

  
}
