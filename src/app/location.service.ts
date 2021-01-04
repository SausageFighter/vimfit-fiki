import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private currentMilestone = new ReplaySubject<number>();
  constructor() {
    this.currentMilestone.next(0);
  }

  setCurrentMilestone(milestoneNumber: number) {
    this.currentMilestone.next(milestoneNumber);
  }

  getCurrentMilestone(): ReplaySubject<number> {
    return this.currentMilestone;
  }
}
