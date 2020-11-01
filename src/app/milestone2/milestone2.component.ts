import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-milestone2',
  templateUrl: './milestone2.component.html',
  styleUrls: ['./milestone2.component.scss']
})
export class Milestone2Component implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
