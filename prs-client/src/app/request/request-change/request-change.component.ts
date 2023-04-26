import { Component } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent {

  users: User[] = [];
  request: Request = new Request();
  pageTitle = "Modify Request"
  constructor(
    private usrsvc: UserService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ){}


  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Updated!");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })


  }
}
