import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router)  { }
  users={
    name: '',
    mobile: '',
    email: '',
    password: '',
    repeatpassword: ''
  }
  ngOnInit(): void {
  }

submit(){
  this.http.post("http://localhost:1337/usersignup", this.users).subscribe((Response:any)=>{
  console.log(this.users)
  this.router.navigate(["/login"])
  })
}
}