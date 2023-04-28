import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  pageTitle = "Vendor Details";
  vendor!: Vendor;
  areYouSure: boolean = false;
  isAdmin: boolean = false;
  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ){}
  delete(): void {
    this.areYouSure = !this.areYouSure;
  }
  finalDelete(): void {
    this.vensvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Deleted!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.isAdmin = this.sys.isAdmin;
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
