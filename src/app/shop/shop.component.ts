import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  shop: Array<any> = [
    {
      id: 1,
      name: 'Thomas Edward',
      price: 199.99,
      backgroundImage: '../../assets/images/pexels-ekaterina-12203460@2x.png',
      rating: 5,
    },
    {
      id: 2,
      name: 'Chris Doe',
      price: 199.00,
      backgroundImage: '../../assets/images/pexels-genaro-servín-763210@2x.png',
      rating: 1,
    },

    {
      id: 3,
      name: 'Emilie Jones',
      price: 199.20,
      backgroundImage: '../../assets/images/pexels-pixabay-164455@2x.png',
      rating: 3,
    },
    {
      id: 4,
      name: 'Jessica Williams',
      price: 199.99,
      backgroundImage:
        '../../assets/images/pexels-steve-johnson-1269968@2x.png',
      rating: 5,
    },
    {
      id: 5,
      name: 'Jessica Williams',
      price: 199.30,
      backgroundImage: '../../assets/images/pexels-fiona-art-5022849@2x.png',
      rating: 4,
    },
  ];
}
