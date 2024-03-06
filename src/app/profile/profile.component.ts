import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any={}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
console.log(this.user);
  this.getData()   
  }
  getData() {
    // Retrieve user data from local storage
    const userData = localStorage.getItem("user");

    // Parse JSON data if available
    if (userData) {
      this.user = JSON.parse(userData);
   
    }
    }
  }
