import { Component, OnInit, HostListener } from '@angular/core';
import { costs } from './costs';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'milestone1',
  templateUrl: './milestone1.component.html',
  styleUrls: ['./milestone1.component.scss']
})
export class Milestone1Component implements OnInit {
  costs = costs;
  chartsWidth: number = 1200;
  costsChartHeight: number = 300;

  costsChartView: any[] = [this.chartsWidth * 0.8, this.costsChartHeight];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  center$ = new Subject<any>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'training',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/training.svg'));
    iconRegistry.addSvgIcon(
      'bill',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bill.svg'));
    iconRegistry.addSvgIcon(
      'communication',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/communication.svg'));
    iconRegistry.addSvgIcon(
      'habits',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/habits.svg'));
    iconRegistry.addSvgIcon(
      'click',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/click.svg'));
    iconRegistry.addSvgIcon(
      'dollar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dollar.svg'));
    iconRegistry.addSvgIcon(
      'house',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/house.svg'));
    iconRegistry.addSvgIcon(
      'teaching',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/teaching.svg'));
    iconRegistry.addSvgIcon(
      'world-grid',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/world-grid.svg'));
    iconRegistry.addSvgIcon(
      'building',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/building.svg'));
    iconRegistry.addSvgIcon(
      'cardiologist',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cardiologist.svg'));
    iconRegistry.addSvgIcon(
      'team',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/team.svg'));
    iconRegistry.addSvgIcon(
      'app-store',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/app-store.svg'));
    iconRegistry.addSvgIcon(
      'google-play',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google-play.svg'));
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
    iconRegistry.addSvgIcon(
      'like',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/like.svg'));
    iconRegistry.addSvgIcon(
      'dislike',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dislike.svg'));
  }

  ngOnInit() {
    this.updateChartsView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1200) {
      this.chartsWidth = event.target.innerWidth;
    } else {
      this.chartsWidth = 1200;
    }
    this.updateChartsView();
  }

  updateChartsView() {
    if (this.chartsWidth < 426) {
      this.costsChartHeight = 300;
    } else {
      this.costsChartHeight = 300;
    }

    this.costsChartView = [this.chartsWidth * 0.8, this.costsChartHeight];
  }

  colorScheme = {
    domain: ['#ff8001']
  };

}
