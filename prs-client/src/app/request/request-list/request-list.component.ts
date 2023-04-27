import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle = "Request List";
  requests: Request[] = [];
  userId!: number

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService
  ){}


  ngOnInit(): void {
    this.sys.chkLogin();
    this.userId = this.sys.loggedInUserId;
    this.reqsvc.list().subscribe({
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
