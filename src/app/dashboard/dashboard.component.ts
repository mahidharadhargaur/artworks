import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public posts = [
    {
      id: 1,
      userInfo: {
        userName: 'Lara Leones',
        userProfilePic: '../assets/images/pexels-ali-pazani-2613260.png',
        userHandle: 'theWallArt',
      },
      postInfo: {
        postDescription:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        postImage: '../assets/images/pexels-humphrey-muleba-2045248@2x.png',
      },
      postStatistics: {
        likesCount: 9800,
        commentsCount: 8600,
        shareCount: 7200,
      },
    },
    {
      id: 2,
      userInfo: {
        userName: 'Thomas J.',
        userProfilePic: '../assets/images/pexels-antoni-shkraba-4442005.png',
        userHandle: 'theWallArt',
      },
      postInfo: {
        postDescription:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        postImage: '../assets/images/pexels-tobias-bjørkli-2236382@2x.png',
      },
      postStatistics: {
        likesCount: 9800,
        commentsCount: 8600,
        shareCount: 7200,
      },
    },
  ];
}
