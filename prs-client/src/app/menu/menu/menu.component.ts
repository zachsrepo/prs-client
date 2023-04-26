import { Component } from '@angular/core';
import { Menu } from '../menubar.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("User", "/user/list"),
    new Menu("Vendor", "/vendor/list"),
    new Menu("Product", "/product/list"),
    new Menu("Request", "/request/list"),
    new Menu("About", "/About"),
    new Menu("Login", "/user/login")
  ]
}
