import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  user!: User;
  request: Request = new Request();
  pageTitle = "New Request"
  constructor(
    private usrsvc: UserService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    this.request.userId = this.user.id;
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request Created!");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let userId = this.route.snapshot.params["userId"];
    
    this.usrsvc.get(userId).subscribe({
      next: (res) => {
        this.user = res;
        
      },
      error: (err) => {
        console.error(err);
      }
    })


  }
}
