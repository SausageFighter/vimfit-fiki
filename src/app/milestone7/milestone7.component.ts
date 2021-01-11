import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'milestone7',
  templateUrl: './milestone7.component.html',
  styleUrls: ['./milestone7.component.scss']
})
export class Milestone7Component implements OnInit {
  private readonly FOLDER_SPLASH = 'assets/splash-screens';
  private readonly FOLDER_INSPIRATION = 'assets/inspiration';
  private readonly FOLDER_TRAINING = 'assets/training';
  private readonly FOLDER_PROFILE = 'assets/profile';
  private readonly FOLDER_DEMO = 'assets/demo';


  imagesSplash = ['1.png', '2.png', '3.png'].map(name => `${this.FOLDER_SPLASH}/${name}`);
  imagesInspiration = ['5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'].map(name => `${this.FOLDER_INSPIRATION}/${name}`);
  imagesTraining = ['14.png', '15.png', '16.png'].map(name => `${this.FOLDER_TRAINING}/${name}`);
  imagesProfile = ['17.png', '18.png'].map(name => `${this.FOLDER_PROFILE}/${name}`);
  imagesDemo = ['gif1.gif', 'gif2.gif'].map(name => `${this.FOLDER_DEMO}/${name}`);

  constructor() { }

  ngOnInit(): void {
  }

}
