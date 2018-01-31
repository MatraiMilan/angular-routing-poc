import { Injectable } from '@angular/core';
import { ImageInterface } from '../interfaces/image-interface';

@Injectable()
export class PictureService {

  images: ImageInterface[] = [
    {
      link: 'https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg',
      alt: 'cat'
    },
    {
      link: 'https://s7d2.scene7.com/is/image/PetSmart/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818?$PB1201$',
      alt: 'dog'
    },
    {
      link: 'http://astromatrix.org/Content/Images/Objects/Bird.jpg',
      alt: 'bird'
    }
  ];

  constructor() { }

  getImages(): ImageInterface[] {
    return this.images;
  }

}
