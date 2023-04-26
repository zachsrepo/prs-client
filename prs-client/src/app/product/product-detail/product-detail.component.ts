import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = "Product Details";
  product!: Product;

  areYouSure: boolean = false;
  constructor(
    private psvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  delete(): void {
    this.areYouSure = !this.areYouSure;
  }
  finalDelete(): void {
    this.psvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Deleted!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"])
    this.psvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
