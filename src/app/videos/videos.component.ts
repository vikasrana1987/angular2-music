import {
  Component,
  OnInit
} from '@angular/core';

import { Video } from '../_models';
import { VideoService } from '../_services';

@Component({
  selector: '[my-videos]',  // <home></home>
  styleUrls: [ './videos.component.css' ],
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];
  isLoading: boolean;
  constructor(private videoService: VideoService) {
    // Do stuff
  }

  public ngOnInit() {
    this.isLoading = true;
    this.getVideos();
  }

  getVideos() {
    this.videoService.fetchVideos('punjabi movies')
      .subscribe(data => {
        this.videos = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.medium.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            item.snippet.publishedAt,
            item.snippet.description);
        });
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        //this.alertService.error(error);
      });
  }
}
