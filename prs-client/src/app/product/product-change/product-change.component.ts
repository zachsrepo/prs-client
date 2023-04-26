import { Component } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {
  pageTitle = "Modify Product";
  product!: Product;
  vendors: Vendor[] = [];

  constructor(
    private vensvc: VendorService,
    private psvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  save(): void {
    this.psvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product Updated!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = this.route.snapshot.params["id"];
    this.psvc.get(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
