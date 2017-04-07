import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public sidebarClosed: boolean = true;
  constructor() {
    //
  }

  public toggleSidebar() {
     this.sidebarClosed = !this.sidebarClosed;
  }
}
