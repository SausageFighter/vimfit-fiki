import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'milestone4',
  templateUrl: './milestone4.component.html',
  styleUrls: ['./milestone4.component.scss']
})
export class Milestone4Component implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIcon(
    //   'training-red',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/training-red.svg')
    // );
    // iconRegistry.addSvgIcon(
    //   'chat',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat.svg')
    // );
    // iconRegistry.addSvgIcon(
    //   'resume',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resume.svg')
    // );
  }

  ngOnInit(): void {
  }

}
