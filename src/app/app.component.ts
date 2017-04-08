/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
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
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public sidebarClosed: boolean = true;

  constructor(
    public appState: AppState,
    private translate: TranslateService,
    private sidebarService: SidebarService
  ) {
    console.log(sidebarService.sidebarToggled$);
    sidebarService.sidebarToggled$.subscribe((data) => {
      console.log('Subscription got', data); // Subscription wont get
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

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
