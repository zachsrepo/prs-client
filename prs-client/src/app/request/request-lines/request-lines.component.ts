import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {
  pageTitle = "Request Lines";
  request!: Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
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
