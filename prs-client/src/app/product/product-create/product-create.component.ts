import { Component } from '@angular/core';
import { Product } from '../product.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ProductService } from '../product.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  pageTitle = "New Product";
  product: Product = new Product()
  vendors: Vendor[] = [];

  constructor(
    private vensvc: VendorService,
    private psvc: ProductService,
    private router: Router
  ){}

  save(): void {
    this.psvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product Created!");
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
    })
  }

}
