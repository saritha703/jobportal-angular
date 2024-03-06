import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor( private http:HttpClient, private router:Router) { }
  users={
    name: '',
    mobile: '',
    email: '',
    password: '',
    repeatpassword: ''
  };
  // 'name':"saritha"
  // 'mobilenumber':"9490201650"
  // 'email':"saritha@123"
  

  ngOnInit(): void {
  }
  register(){
    this.http.post("http://localhost:1337/usersignup", this.users).subscribe((Response:any)=>{
    console.log(this.users)
    this.router.navigate(["/login"])
    
  })
  }
}
