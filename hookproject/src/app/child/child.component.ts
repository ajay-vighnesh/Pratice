import { Component, EventEmitter, Input, Output, SimpleChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() list!:any[]

  name: string = '';
  @Input() input:string =''
  @Input() update:number=0;
  @Output() nameChangeEvent = new EventEmitter<string>(); 
  constructor(){
    console.log(this.list)
  
  }
  share() {
  this.nameChangeEvent.emit(this.name);
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(this.input,changes)
  }
  
  
  
  ngDoCheck(): void {
    console.log(this.list)
  }
  
  }
  
