import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedin: boolean =true;

  constructor(public router: Router,private authService: AuthService, private route:Router) { }

  ngOnInit(): void {
    
  
   } 
   
   isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
   handleLogout(){
    localStorage.removeItem("user")
    this.route.navigate(['/login'])
   }

   }
  
  
 
   
