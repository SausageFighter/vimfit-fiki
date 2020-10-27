import { Component, OnInit, HostListener } from '@angular/core';
import { metrics, costs } from './costs';
import { Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'milestone1',
  templateUrl: './milestone1.component.html',
  styleUrls: ['./milestone1.component.scss']
})
export class Milestone1Component implements OnInit {
  metrics = metrics;
  costs = costs;
  chartsWidth: number = 1000;
  costsChartHeight: number = 400;
  metricsChartHeight: number = 400;

  metricsChartView: any[] = [this.chartsWidth * 0.8, this.costsChartHeight];
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
  }

  ngOnInit() {
    this.chartsWidth = window.innerWidth;
    this.updateChartsView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.chartsWidth = event.target.innerWidth;
    this.updateChartsView();
  }

  updateChartsView() {
    if (this.chartsWidth < 426) {
      this.costsChartHeight = 800;
      this.metricsChartHeight = 150;
    } else {
      this.costsChartHeight = 400;
      this.metricsChartHeight = 400;
    }

    this.costsChartView = [this.chartsWidth * 0.8, this.costsChartHeight];
    this.metricsChartView = [this.chartsWidth * 0.8, this.metricsChartHeight];
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

}
