import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: '[my-music-player]',
  styleUrls: [ './music-player.component.css' ],
  templateUrl: './music-player.component.html'
})
export class MusicPlayerComponent implements OnInit {
  isPlaying: boolean = false;
  constructor() {
    // Do stuff
  }

  public ngOnInit() {

  }

  public previous() {
    console.log('previous');
  }

  public next() {
    console.log('next');
  }

  public play() {
    this.isPlaying = true;
    console.log('play');
  }

  public pause() {
    this.isPlaying = false;
    console.log('pause');
  }

  public stop() {
    console.log('stop');
  }

  public playlist() {
    console.log('playlist');
  }
}
