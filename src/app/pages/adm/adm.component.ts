import { Component } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent {
  menuToggle:boolean = this.windowsToogle();

  menuToggleHandler(){
    this.menuToggle == true ? this.menuToggle = false : this.menuToggle = true;
    console.log(this.menuToggle);
  }

  windowsToogle(){
    return window.innerWidth >= 768 ? true : false
  }
}
