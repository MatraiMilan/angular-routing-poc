import { Component, OnInit, Input, animate, style, state, transition, trigger } from '@angular/core';
import { ImageInterface } from '../../interfaces/image-interface';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  animations: [
    trigger('imageState', [
      state('loaded', style({
        opacity: 1,
        transform: 'scale(1, 1)'
      })),
      state('not-loaded', style({
        opacity: 0,
        transform: 'scale(.9, .9)'
      })),
      transition('not-loaded => loaded', animate( '500ms cubic-bezier(0.500, 0.250, 0.535, 1.535)'))
    ])
  ]
})
export class PictureComponent implements OnInit {
  @Input() image: ImageInterface;
  state: string;

  constructor() {}

  ngOnInit() {
    this.state = 'not-loaded';
  }

  onImageLoaded() {
    this.state = 'loaded';
  }
}
