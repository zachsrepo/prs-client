import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent {
  @Input()
  menu: any;
  ngOnInit(): void {
   
  }
}
