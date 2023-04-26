import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {
  pageTitle = "New Request Line"
  requestline: Requestline = new Requestline();
  products: Product[] = [];
  rlId: number = 0;

  constructor(
    private psvc: ProductService,
    private route: ActivatedRoute,
    private rlsvc: RequestlineService,
    private router: Router
  ){}
  save(): void {
    this.requestline.requestId = +this.rlId;
    this.requestline.productId = +this.requestline.productId;
    console.log(this.requestline);
    this.rlsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Line Created");
        this.router.navigateByUrl(`/request/lines/${this.rlId}`)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.rlId = this.route.snapshot.params["id"];
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
