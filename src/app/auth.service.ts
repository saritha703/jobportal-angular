
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  public isAuthenticated(): boolean {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.id){
     
      return true
    }
      
     
      return false
  }
}
