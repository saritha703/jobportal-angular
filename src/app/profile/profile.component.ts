import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any = {}
  constructor() { }

  ngOnInit(): void {
    let _user = JSON.parse (localStorage.getItem('user') || '{}');
this.user =_user;
    console.log(this.user)
  }

}
