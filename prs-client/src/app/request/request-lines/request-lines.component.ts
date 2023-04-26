import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

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
    private route: ActivatedRoute,
    private rlsvc: RequestlineService
  ){}
  remove(id: number): void {
    this.rlsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Line Deleted");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  refresh(): void {
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
  ngOnInit(): void {
    this.refresh();
  }


}
