import { Component, Input } from '@angular/core';

export interface PhotoCardInterface {
  id: number;
  name: string;
  profilePhoto: string;
  handle: string;
  backgroundImage: string;
}
@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() item: PhotoCardInterface = {} as PhotoCardInterface;
}
