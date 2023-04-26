import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle = "Vendor List";
  vendors: Vendor[] = [];
  constructor(
    private vensvc: VendorService
  ){}


  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
