import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { SidebarService } from './../shared';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public sidebarClosed: boolean = true;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
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
  }

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
