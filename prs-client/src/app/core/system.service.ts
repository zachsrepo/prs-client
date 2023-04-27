import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User | null = null;
  loggedInUserId: number = 0;
  constructor(
    private router: Router
  ) { }
  chkLogin(): void{
    if(this.loggedInUser === null){
      this.router.navigateByUrl("/user/login")
    }
  }
}
