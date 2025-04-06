import { Component } from '@angular/core';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'couch-validate';
name!: string;
email!: string;
age!: number;
constructor(public validation:ValidationService){}

submit(){
  let docs={
    "data":{
        name:this.name,
        email:this.email,
        age:this.age,
        type:"user"
    }
  };
console.log(docs);


  this.validation.createdoc(docs).subscribe(res=>{
    console.log(res);
  },
  error=>{
if(error.error && error.error.reason){
  alert(`validation Error: ${error.error.reason}`);
}else{
  console.log("error adding document",error);
  
}
  }
)
}

}
