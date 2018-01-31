import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture-service/picture.service';
import { ImageInterface } from '../interfaces/image-interface';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
  providers: [PictureService]
})
export class PicturesComponent implements OnInit {

  images: ImageInterface[];

  constructor(private _pictureService: PictureService) {
  }

  ngOnInit() {
    this.images = this._pictureService.getImages();
  }
}
