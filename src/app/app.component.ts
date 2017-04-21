/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  // ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { SidebarService } from './shared';

import { TranslateService } from '@ngx-translate/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name = 'Angular 2 Webpack Starter';
  public sidebarClosed = true;

  constructor(
    public appState: AppState,
    private translate: TranslateService,
    private sidebarService: SidebarService
  ) {
    sidebarService.sidebarToggled$.subscribe((data) => {
      this.sidebarClosed = !this.sidebarClosed;
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    let browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
 }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
