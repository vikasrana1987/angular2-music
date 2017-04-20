import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class VideoService {

  constructor(private http: Http) {}

  fetchVideos(query: string) {
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
          '&maxResults=50' +
          '&type=video' +
          '&key=AIzaSyCQ8lm5q5RAMbT8SR9gEyxfFCwaSrAzfw0')
      .map(response => response.json())
  }

  fetchRelatedVideos(query: string) {
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${query}`+
          '&maxResults=3' +
          '&type=video' +
          '&key=AIzaSyCQ8lm5q5RAMbT8SR9gEyxfFCwaSrAzfw0')
      .map(response => response.json())
  }
}
