import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  CouchURL: string = 'https://192.168.57.185:5984/test_crud/';
  couchUserName: string = 'd_couchdb';
  couchPassword: string = 'Welcome#2';

  header = {
    headers: {
      'Authorization': 'Basic ' + btoa(this.couchUserName + ':' + this.couchPassword),
      'Content-Type': 'application/json' 
    }
  }

  constructor(public http:HttpClient) { }

  createdoc(doc:any){
    return this.http.post(this.CouchURL,doc,this.header)
      }
}
