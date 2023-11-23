import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post-statistics',
  templateUrl: './post-statistics.component.html',
  styleUrls: ['./post-statistics.component.scss']
})
export class PostStatisticsComponent {
  @Input() statistics: any;

}
