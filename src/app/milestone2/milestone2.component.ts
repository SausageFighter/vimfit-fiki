import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'milestone2',
  templateUrl: './milestone2.component.html',
  styleUrls: ['./milestone2.component.scss']
})
export class Milestone2Component implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
      iconRegistry.addSvgIcon(
        'contract',
        sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/contract.svg'));
      iconRegistry.addSvgIcon(
        'broken-bone',
        sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/broken-bone.svg'));
      iconRegistry.addSvgIcon(
        'fatigue',
        sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/fatigue.svg'));
  }

  ngOnInit(): void {
  }

}
