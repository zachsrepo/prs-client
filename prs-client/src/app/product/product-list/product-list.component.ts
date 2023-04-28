import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = "Product List";
  products: Product[] = [];
  isAdmin: boolean = false;
  constructor(
    private psvc: ProductService,
    private sys: SystemService
  ){}

  ngOnInit(): void {
    this.sys.chkLogin();
    this.isAdmin = this.sys.isAdmin;
    this.psvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
