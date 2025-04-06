import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  implements OnInit,AfterViewInit{

  list:any[]=["abc","def","ghi"]
  divif:boolean = false;
  name: string = 'ajay';
sendData: string = '';
Output: string = '';
flag:number = 0
constructor(private activate:ActivatedRoute){

}



ngAfterViewInit(): void {
  console.log('after view init');
  
}

ngOnInit(){
console.log("parammap",this.activate.snapshot.paramMap.get('id'))
console.log("param",this.activate.snapshot.params['id'])

this.activate.params.subscribe((res:any)=>{
console.log(res['id']);

})
}

shareName(data: string) {
  this.Output = data;
  this.divif=true
  this.flag+=1
}

append(){
  this.list.push(this.name)
  console.log(this.list);
  
}
share() {
this.sendData = this.name;
console.log(this.sendData);
}

}



