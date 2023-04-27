import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-approvereject',
  templateUrl: './request-approvereject.component.html',
  styleUrls: ['./request-approvereject.component.css']
})
export class RequestApproverejectComponent {
  pageTitle = "Review Request";
  request!: Request;
  id: number = 0;
  showRejectReason: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private rlsvc: RequestlineService
  ){}


  approve(id: number): void {
    this.reqsvc.approve(this.request, this.id).subscribe({
      next: (res) => {
        console.debug("Request Approved");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  rejectReason(): void {
    this.showRejectReason = !this.showRejectReason;
  }
  reject(id: number): void {
    this.reqsvc.reject(this.request, this.id).subscribe({
      next: (res) => {
        console.debug("Request Rejected");
        this.showRejectReason = false;
        this.router.navigateByUrl("/request/review")
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  refresh(): void {
    this.id = this.route.snapshot.params["id"];
    this.reqsvc.get(this.id).subscribe({
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
