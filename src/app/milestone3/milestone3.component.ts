import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'milestone3',
  templateUrl: './milestone3.component.html',
  styleUrls: ['./milestone3.component.scss']
})
export class Milestone3Component implements OnInit {
  private readonly FOLDER = 'assets/sketches';
  imagesSketches = ['chat.jpg', 'coach1.jpg', 'coach2.jpg', 'inspiration.jpg', 'login_register.jpg', 'profile.jpg', 'train.jpg'].map(name => `${this.FOLDER}/${name}`);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'training-red',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/training-red.svg')
    );
    iconRegistry.addSvgIcon(
      'chat',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat.svg')
    );
    iconRegistry.addSvgIcon(
      'resume',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resume.svg')
    );
  }

  ngOnInit(): void {
  }

}
