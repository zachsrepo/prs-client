import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user!: User;
  pageTitle = "User Details";
  areYouSure: boolean = false;
  isAdmin: boolean = false;
  constructor(
    private usrsvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private sys: SystemService
  ){}
  
  delete(): void {
    this.areYouSure = !this.areYouSure;
  }
  finalDelete(): void {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("Deleted!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.isAdmin = this.sys.isAdmin;
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
