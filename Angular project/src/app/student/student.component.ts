import { Component,Input, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  @Input() myMessage: string = "";
  @Output() myOutMsg: EventEmitter<string> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  sendMsg() {
    this.myOutMsg.emit('@Output : I am child component ');
    }

}
