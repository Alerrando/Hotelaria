import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu:boolean = this.windowsToogle();


  menuToogle(){
    this.menu == true ? this.menu = false : this.menu = true;
    console.log(this.menu);
  }

  windowsToogle(){
    return window.innerWidth >= 768 ? true : false
  }
}
