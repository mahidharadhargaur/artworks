import { Component } from '@angular/core';
import { PhotoCardInterface } from './photo-card/photo-card.component';

@Component({
  selector: 'app-artist-container',
  templateUrl: './artist-container.component.html',
  styleUrls: ['./artist-container.component.scss'],
})
export class ArtistContainerComponent {
  artists: Array<PhotoCardInterface> = [
    {
      id: 1,
      name: 'Thomas Edward',
      profilePhoto: '../../assets/images/pexels-anastasia-shuraeva-4406721.png',
      handle: 'thewildwithyou',
      backgroundImage: '../../assets/images/pexels-ekaterina-12203460@2x.png',
    },
    {
      id: 2,
      name: 'Chris Doe',
      profilePhoto: '../../assets/images/pexels-andrea-piacquadio-3771118.png',
      handle: 'thewildwithyou',
      backgroundImage: '../../assets/images/pexels-genaro-servín-763210@2x.png',
    },
  
    {
      id: 3,
      name: 'Emilie Jones',
      profilePhoto: '../../assets/images/pexels-antoni-shkraba-4442102.png',
      handle: 'thewildwithyou',
      backgroundImage: '../../assets/images/pexels-pixabay-164455@2x.png',
    },
    {
      id: 4,
      name: 'Jessica Williams',
      profilePhoto: '../../assets/images/pexels-antoni-shkraba-4442005.png',
      handle: 'thewildwithyou',
      backgroundImage: '../../assets/images/pexels-steve-johnson-1269968@2x.png',
    },
    {
      id: 5,
      name: 'Jessica Williams',
      profilePhoto: '../../assets/images/pexels-antoni-shkraba-4442005.png',
       handle: 'thewildwithyou',
      backgroundImage: '../../assets/images/pexels-fiona-art-5022849@2x.png',
    },
   
  ];
}
