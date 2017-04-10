import {
  Component,
  OnInit
} from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: '[my-events]',  // <home></home>
  styleUrls: [ './events.component.css' ],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events = [];
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0.8s'
  };
  constructor() {
    // Do stuff
  }

  public ngOnInit() {
    this.events = [
      {title: 'Event 1'},
      {title: 'Event 2'},
      {title: 'Event 3'},
      {title: 'Event 4'},
      {title: 'Event 5'},
      {title: 'Event 6'}
    ]
  }
}
