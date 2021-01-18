import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Milestone1Component } from './milestone1/milestone1.component';
import { Milestone2Component } from './milestone2/milestone2.component';
import { Milestone3Component } from './milestone3/milestone3.component';
import { Milestone4Component } from './milestone4/milestone4.component';
import { Milestone5Component } from './milestone5/milestone5.component';
import { Milestone6Component } from './milestone6/milestone6.component';
import { Milestone7Component } from './milestone7/milestone7.component';
import { Milestone8Component } from './milestone8/milestone8.component';
import { Milestone9Component } from './milestone9/milestone9.component';
import { LocationService } from './location.service';
import { TeamComponent } from './team/team.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vimfit';
  isMobile = false;

  offsets: Array<number>;
  @ViewChild(Milestone1Component, {read: ElementRef}) milestone1: ElementRef;
  @ViewChild(Milestone2Component, {read: ElementRef}) milestone2: ElementRef;
  @ViewChild(Milestone3Component, {read: ElementRef}) milestone3: ElementRef;
  @ViewChild(Milestone4Component, {read: ElementRef}) milestone4: ElementRef;
  @ViewChild(Milestone5Component, {read: ElementRef}) milestone5: ElementRef;
  @ViewChild(Milestone6Component, {read: ElementRef}) milestone6: ElementRef;
  @ViewChild(Milestone7Component, {read: ElementRef}) milestone7: ElementRef;
  @ViewChild(Milestone8Component, {read: ElementRef}) milestone8: ElementRef;
  @ViewChild(Milestone9Component, {read: ElementRef}) milestone9: ElementRef;
  @ViewChild(TeamComponent, {read: ElementRef}) team: ElementRef;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.updateIsMobile();
  }

  updateIsMobile() {
    if (window.innerWidth > 960) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateIsMobile();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    let currentMilestone = 0;
    this.offsets = [
      0,
      this.milestone8.nativeElement.offsetTop,
      this.milestone7.nativeElement.offsetTop,
      this.milestone6.nativeElement.offsetTop,
      this.milestone5.nativeElement.offsetTop,
      this.milestone4.nativeElement.offsetTop,
      this.milestone3.nativeElement.offsetTop,
      this.milestone2.nativeElement.offsetTop,
      this.milestone1.nativeElement.offsetTop,
      this.team.nativeElement.offsetTop,
    ];
    for (let i = 0; i < this.offsets.length - 1; i++) {
      if (window.pageYOffset >= this.offsets[i] && window.pageYOffset < this.offsets[i + 1]) {
        currentMilestone = this.offsets.length - i - 1;
        break;
      }
    }

    this.locationService.setCurrentMilestone(currentMilestone);
  }
  
  scrollToElement($element) {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
