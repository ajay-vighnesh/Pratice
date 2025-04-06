import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouchService } from './services/couch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crudproject';
  crudForm! : FormGroup;
  tableName : any[] = [];
  isEdit:boolean = false;
  update_id:string = "";
  update_rev:string = "";
  searchTearm:string = ""

  constructor(public cf:FormBuilder, public service:CouchService){
    this.service.getViewUrl()
    this.crudForm = this.cf.group({
      studentName: ["",[Validators.pattern(/^[a-zA-Z]+$/),Validators.required]],
      rollNumber: ["",[Validators.pattern(/^[0-9]+$/),Validators.required]],
      className: ["",[Validators.pattern(/^[0-9]+$/),Validators.required]],
      // img: [""]
      
    })
  }
 
  // Clear the data inside the input box //
  clear(){
    this.crudForm.reset()
  }
  // Clear the data inside the input box //
  
  // Cancel the data //
  cancel(){
    this.clear()
    this.isEdit = false;
  }
  // Cancel the data //

  // Create the table //
  create(){
if(this.crudForm.valid){
  this.service.create(this.crudForm.value).subscribe((res:any)=>{
    console.log(res);
    this.read();
    this.clear()
  })
}
else{
  alert('Invalid')
}
  }
  // Create the table //

  // Entering the page Fetch the data //
  ngOnInit(): void {
    this.read()
  }
  // Entering the page Fetch the data //

  read(){
    this.service.read().subscribe((res:any)=>{
      this.tableName = res.rows
      console.log(this.tableName);
    })
  }

  updateAction(data:any){
    this.crudForm.patchValue(data);
    this.isEdit = true;
    this.update_id = data._id;
    this.update_rev = data._rev;
  }

  update(){
    if(this.crudForm.valid){
      this.service.update(this.update_id,this.update_rev,this.crudForm.value).subscribe((res)=>{
        console.log(res);
        this.read();
        this.isEdit = false;
        this.clear()
      })
    }
    else{
      alert('Invalid')
    }
  }


  delete(_id:string,_rev:string){
    this.service.delete(_id,_rev).subscribe((res:any)=>{
      console.log(res);
      this.read()
    })
  }

  search(){
    console.log(this.searchTearm)
    const searchTerms = {
      
      q :`studentName:_*${this.searchTearm}*`,
      include_docs: true
      
    }

    this.service.search(searchTerms).subscribe((res:any)=>{
      console.log(res);
      
    })

  }

  
  


}
