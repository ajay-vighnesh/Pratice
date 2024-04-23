import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {
productName: string = '';

constructor(private router:ActivatedRoute) {}

ngOnInit() {
  this.router.params.subscribe((name) => 
    this.productName = name['id'])
}

}
