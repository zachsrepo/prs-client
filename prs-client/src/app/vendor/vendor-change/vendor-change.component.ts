import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent {

  pageTitle = "Modify Vendor";
  vendor!: Vendor;
  areYouSure: boolean = false;
  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  save(): void {
    this.vensvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Updated!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"])
    this.vensvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
