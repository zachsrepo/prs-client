import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  pageTitle = "User List"
  constructor(
    private usrsvc: UserService
  ) {}
  ngOnInit(): void {
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
