import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-state/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavItems = [
    {
      id: 10,
      name: 'Home',
      icon: '../assets/icons/home.svg',
    },
    {
      id: 1,
      name: 'Notification',
      icon: '../assets/icons/notification.svg',
    },
    {
      id: 2,
      name: 'Shop',
      icon: '../assets/icons/heart.svg',
    },
    {
      id: 3,
      name: 'Conversation',
      icon: '../assets/icons/message.svg',
    },
    {
      id: 4,
      name: 'Wallet',
      icon: '../assets/icons/message.svg',
    },
    {
      id: 5,
      name: 'Subsciption',
      icon: '../assets/icons/favorite.svg',
    },
    {
      id: 6,
      name: 'MyProfile',
      icon: '../assets/icons/profile.svg',
    },
    {
      id: 7,
      name: 'Setting',
      icon: '../assets/icons/setting.svg',
    },
  ];

  isLoggedIn$ = this.authService.isLoggedIn;
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log('logged Out');
        this.router.navigate(['']);
      },
    });
  }
}
