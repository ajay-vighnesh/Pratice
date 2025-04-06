import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  paramValue: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {

      this.paramValue = JSON.parse(param['data']);
      console.log(this.paramValue,'this.parambalue');
      
    });
  }

}
