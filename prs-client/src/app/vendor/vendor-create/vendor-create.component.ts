import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Route, Router } from '@angular/router';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  pageTitle = "New Vendor";
  vendor: Vendor = new Vendor();
  constructor(
    private vensvc: VendorService,
    private router: Router
  ){}
  save(): void  {
    this.vensvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Created!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
