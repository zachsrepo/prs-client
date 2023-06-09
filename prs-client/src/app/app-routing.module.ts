import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestApproverejectComponent } from './request/request-approvereject/request-approvereject.component';

const routes: Routes = [
  {path: "", component: UserLoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "user/login", component: UserLoginComponent},
  {path: "user/list", component: UserListComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/change/:id", component: UserChangeComponent},
  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/change/:id", component: VendorChangeComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "product/change/:id", component: ProductChangeComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "request/list", component: RequestListComponent},
  {path: "request/create/:userId", component: RequestCreateComponent},
  {path: "request/review", component: RequestReviewComponent},
  {path: "request/detail/:id", component: RequestDetailComponent},
  {path: "request/change/:id", component: RequestChangeComponent},
  {path: "request/lines/:id", component: RequestLinesComponent},
  {path: "request/statuschange/:id", component: RequestApproverejectComponent},
  {path: "requestlines/create/:id", component: RequestlineCreateComponent},
  {path: "requestlines/change/:id/:requestId", component: RequestlineChangeComponent},

  
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
