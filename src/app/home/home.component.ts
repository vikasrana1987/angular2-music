import {
  Component,
  OnInit
} from '@angular/core';

import { Album } from '../_models/index';
import { AlbumService } from '../_services';

@Component({
  selector: '[my-home]',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public albums: Album[] = [];
  
  constructor(
    private albumService: AlbumService
  ) {
    // Do stuff
  }
  
  public ngOnInit() {
     this.getAlbums();
  }

  public getAlbums(): void {
    this.albumService.getAll()
        .subscribe(
            data => {
               this.albums = data;
               console.log(this.albums)
            },
            error => {
               console.log(error);
            });
  }
}
