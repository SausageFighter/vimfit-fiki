import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vimfit';
  isMobile = false;

  ngOnInit() {
    this.updateIsMobile();
  }

  updateIsMobile() {
    if (window.innerWidth > 960) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateIsMobile();
  }
  
  scrollToElement($element) {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
