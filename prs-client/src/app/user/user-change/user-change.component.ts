import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent {
  user!: User;
  pageTitle = "Modify User";
  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    this.usrsvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("User Updated!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"])
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
