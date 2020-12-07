import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'milestone5',
  templateUrl: './milestone5.component.html',
  styleUrls: ['./milestone5.component.scss']
})
export class Milestone5Component implements OnInit {
  private readonly FOLDER_ANALYTICS = 'assets/analytics';
  private readonly FOLDER_MARKETING = 'assets/marketing';

  imagesAnalytics = ['traffic.png', 'interraction.png', 'devices.png', 'technologies.png'].map(name => `${this.FOLDER_ANALYTICS}/${name}`);
  imagesMarketing = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg'].map(name => `${this.FOLDER_MARKETING}/${name}`);

  constructor() { }

  ngOnInit(): void {
  }

}
