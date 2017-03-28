import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  private sidebarClosed: boolean = true;
  constructor() {

  }

  private toggleSidebar() {
     this.sidebarClosed = !this.sidebarClosed;
  }
}
