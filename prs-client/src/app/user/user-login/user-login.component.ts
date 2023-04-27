import { Component } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string = "";
  password: string = "";
  message: string = "";
  pageTitle = "PRS Login";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ){}


  login(): void {
    this.usrsvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login Successful");
        this.message = "Login Successful!";
        this.sys.loggedInUser = res;
        this.sys.loggedInUserId = this.sys.loggedInUser.id;
        this.router.navigateByUrl("/user/list");
        
      },
      error: (err) => {
        console.error(err);
        if(err.status === 404){
          this.message = "Login Failed / Email or Password Incorrect!"
        }
      }
    })
  }
  ngOnInit(): void {
    this.sys.loggedInUser = null;
  }
}
