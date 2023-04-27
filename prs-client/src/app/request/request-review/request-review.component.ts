import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {

  pageTitle = "Requests In Review";
  requests: Request[] = [];
  

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private sys: SystemService
  ){}


  ngOnInit(): void {
    // let userId = this.route.snapshot.params["userId"];
    this.sys.chkLogin();
    let userId = this.sys.loggedInUserId;
    this.reqsvc.reviewlist(userId).subscribe({
      next: (res) => {
        console.debug(res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
