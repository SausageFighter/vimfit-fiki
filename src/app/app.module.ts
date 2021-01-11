import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Milestone1Component } from './milestone1/milestone1.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { Milestone2Component } from './milestone2/milestone2.component';
import { ResponsiveSidenavModule } from './responsive-sidenav/responsive-sidenav.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Milestone3Component } from './milestone3/milestone3.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { Milestone4Component } from './milestone4/milestone4.component';
import { Milestone5Component } from './milestone5/milestone5.component';
import { Milestone6Component } from './milestone6/milestone6.component';
import { Milestone7Component } from './milestone7/milestone7.component';
import { Milestone8Component } from './milestone8/milestone8.component';


@NgModule({
  declarations: [
    AppComponent,
    Milestone1Component,
    FooterComponent,
    TeamComponent,
    Milestone2Component,
    SidenavComponent,
    Milestone3Component,
    Milestone4Component,
    Milestone5Component,
    Milestone6Component,
    Milestone7Component,
    Milestone8Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatCarouselModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgxChartsModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    ResponsiveSidenavModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
