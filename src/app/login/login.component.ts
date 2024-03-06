import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email : string =''
  // password: string =""
  userLogin: any={}

  // user:any={}

  // step 1: capture from data
  // create data variables / objects
  //find variables to form controls like input type text / password
  //note:make sure you import FormsModule in your AppModule /your parent Module
  //note:make sure you give name to each form control as you are using ngmodel
  //Creat click event to handle  form data

  // step 2: Send Data to API
  //note make sure you import httpclientmodule in your appmodule / parent module

  // Data will be saved in Database
  // API will receive response from Database
  // API will send response client(Browser)
  // step 4: receive server response
  // step 5: show success message and take necessary actions and redirections


  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }
  handleLogin(){
    console.log("Email:"+ this.userLogin.email, "password:"+ this.userLogin.password)
    console.log(this.userLogin)
    this.http.post('http://localhost:1337/users/login',this.userLogin).subscribe((response:any)=>{
      console.log(response)
      if(response.status){
        alert('login successful')
        this.route.navigate(['/profile'])
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      else{
      alert('email/password incorrect')
      }
       //console.log(this.userLogin));
      
    })
     //console.log("end of handlelogin()"){

     }
    }
