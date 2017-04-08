import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../shared';

@Component({
  selector: '[my-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public sidebarClosed: boolean = true;
  constructor(private sidebarService: SidebarService) {
    //
  }

  public toggleSidebar() {
     this.sidebarClosed = !this.sidebarClosed;
     this.sidebarService.toggleSidebar(this.sidebarClosed);
  }
}
