import { Component, OnInit } from '@angular/core';
import { metrics, costs } from './costs';
import { Subject } from 'rxjs';

@Component({
  selector: 'milestone1',
  templateUrl: './milestone1.component.html',
  styleUrls: ['./milestone1.component.scss']
})
export class Milestone1Component implements OnInit {
  metrics = metrics;
  costs = costs;
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  center$ = new Subject<any>();
  
  doCenter() {
    // trigger center
    this.center$.next();
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.doCenter();
  }

}
