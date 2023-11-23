import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerItems=[
    {
      id: 1,
      name: 'Search here..',
      icon: '../assets/icons/Component 32.svg',
    },
    {
      id: 1,
      name: 'Filters',
      icon: '../assets/icons/Component 39 (2).svg',
    },
  ]

}
