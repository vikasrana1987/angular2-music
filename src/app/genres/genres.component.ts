import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';

@Component({
  selector: '[my-genres]',  // <home></home>
  providers: [
    Title
  ],
  styleUrls: [ './genres.component.css' ],
  templateUrl: './genres.component.html'
})
export class GenresComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title
  ) {
    // Do stuff
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
