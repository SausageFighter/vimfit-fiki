import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  currentMilestone$ = this.locationService.getCurrentMilestone();
  constructor(private locationService: LocationService) {}
}
