import { Component, OnInit } from '@angular/core';

import { PhotosService } from 'src/app/photos/photos.service';
import { Photo } from 'src/app/photos/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService.listFromUser('flavio').subscribe((value) => {
      this.photos = value;
    });
  }
}
