import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle = "Request List";
  requests: Request[] = [];

  constructor(
    private reqsvc: RequestService
  ){}


  ngOnInit(): void {
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
