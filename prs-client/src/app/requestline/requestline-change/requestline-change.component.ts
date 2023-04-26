import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent {
  pageTitle = "Modify Request Line";
  requestline!: Requestline;

  products: Product[] = [];
  rlId: number = 0;
  rId: number = 0;

  constructor(
    private psvc: ProductService,
    private route: ActivatedRoute,
    private rlsvc: RequestlineService,
    private router: Router
  ){}
  save(): void {
    this.requestline.id = +this.rlId;
    this.requestline.productId = +this.requestline.productId;

    console.log(this.requestline);
    this.rlsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Line Updated");
        this.router.navigateByUrl(`/request/lines/${this.rlId}`)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.rlId = this.route.snapshot.params["id"];
    this.rId = this.route.snapshot.params["requestId"];

    this.rlsvc.get(this.rlId).subscribe({
      next: (res) => {
        this.requestline = res;
      },
      error: (err) => {
        console.error(err);
      }
    })

    this.psvc.list().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
