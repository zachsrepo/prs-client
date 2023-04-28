import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  pageTitle = "User List"
  isAdmin: boolean = false;
  passwordDisplay: string = "hidetext"
  constructor(
    private usrsvc: UserService,
    private sys: SystemService
  ) {}
  ngOnInit(): void {
    this.sys.chkLogin();
    this.isAdmin = this.sys.isAdmin;
    (this.isAdmin) ? this.passwordDisplay =  "visible" : "hidetext";
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
