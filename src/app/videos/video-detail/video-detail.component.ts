import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

@Component({
  selector: '[my-video-detail]',
  styleUrls: [ './video-detail.component.css' ],
  templateUrl: './video-detail.component.html'
})
export class VideoDetailComponent implements OnInit {
  private sub: any;
  private videoId;
  constructor(private activatedRoute: ActivatedRoute) {
    // Do stuff
  }

  public ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.videoId = params['id'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
