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
  myPlaylist: any;
  constructor() {
    // Do stuff
  }

  public ngOnInit() {
     this.initPlayer();
  }

  public initPlayer() {
    $(document).ready(function(){
      this.myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
      }, [
        {
          title:"Bubble",
          artist:"Miaow",
          mp3: "http://flatfull.com/themes/assets/musics/Miaow-07-Bubble.mp3",
          oga: "http://flatfull.com/themes/assets/musics/Miaow-07-Bubble.ogg",
          poster: "images/m0.jpg"
        },
        {
          title:"Lentement",
          artist:"Miaow",
          mp3: "http://flatfull.com/themes/assets/musics/Miaow-03-Lentement.mp3",
          oga: "http://flatfull.com/themes/assets/musics/Miaow-03-Lentement.ogg",
          poster: "images/m0.jpg"
        },
        {
          title:"Partir",
          artist:"Miaow",
          mp3: "http://flatfull.com/themes/assets/musics/Miaow-09-Partir.mp3",
          oga: "http://flatfull.com/themes/assets/musics/Miaow-09-Partir.ogg",
          poster: "images/m0.jpg"
        }
      ], {
        playlistOptions: {
          enableRemoveControls: true,
          autoPlay: true
        },
        swfPath: "js/jPlayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: false
      });
     });
  }
}
