import { Component, OnInit } from '@angular/core';
import { metrics, costs } from './costs';
import { Subject } from 'rxjs';

@Component({
  selector: 'milestone1',
  templateUrl: './milestone1.component.html',
  styleUrls: ['./milestone1.component.scss']
})
export class Milestone1Component {
  metrics = metrics;
  costs = costs;
  // view: any[] = [-1, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  center$ = new Subject<any>();

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

}
