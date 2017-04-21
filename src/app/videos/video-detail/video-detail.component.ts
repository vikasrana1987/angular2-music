import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

import { Video } from './../../_models';
import { VideoService } from './../../_services';

@Component({
  selector: '[my-video-detail]',
  styleUrls: [ './video-detail.component.css' ],
  templateUrl: './video-detail.component.html'
})
export class VideoDetailComponent implements OnInit {
  private sub: any;
  public videoId;
  videos: Video[] = [];

  constructor(private activatedRoute: ActivatedRoute,
      private videoService: VideoService
  ) {
    // Do stuff
  }

  public ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.videoId = params['id'];
      this.getVideos(this.videoId);
    });
  }

  getVideos(videoId) {
    this.videoService.fetchRelatedVideos(videoId)
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
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
