import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  pageTitle = "Request Details";
  request!: Request;
  areYouSure: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ){}





  delete(): void {
    this.areYouSure = !this.areYouSure;
  }
  finalDelete(): void {
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Deleted!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"])
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
