import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email:string='';
 password:string='';
 userlogin:any={}


  constructor(private _http:HttpClient , private _route:Router) { }

  ngOnInit(): void {
  }
handelLogin(){
  console.log("Email :"+this.userlogin.email,"password:" + this.userlogin.password )
  this._http.post("http://localhost:1337/users/signup", this.userlogin).subscribe((response:any)=>{
  console.log(response);
  
  if(response.status){
    localStorage.setItem("user",JSON.stringify(response.data))
    this._route.navigate(["/profile"])
  
  }
  else{
    alert('email/password does not match')
  }
      })
    
  
  

console.log("End of handlelogin()")
  }
}
