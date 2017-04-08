import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
    public sidebarToggledSource = new Subject();
    public sidebarToggled$ = this.sidebarToggledSource.asObservable();

    public toggleSidebar(sidebarClosed: boolean) {
        this.sidebarToggledSource.next(sidebarClosed);
        console.log('Subscription sent', sidebarClosed); // Subscription wont get
    }
}
