import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName:string = ""
  password:string = ""

  constructor(private router:Router) {}
  
  validate(){
    if(this.userName == 'ajay' && this.password == 'ajay@01'){
      alert("Login Successfull");
      this.router.navigate(['/about']);
    } 
    else if(this.userName === '' && this.password === ''){
      alert("Fill the User Name and Password")
    }
    else{
      alert("Wrong user")
    }
  }
}
