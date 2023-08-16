import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventsComponent } from './events/events.component';
import { ThemeComponent } from './theme/theme.component';
import { FaqComponent } from './faq/faq.component';
import { ApplyComponent } from './apply/apply.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HeadnavComponent } from './nav/headnav/headnav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ThemeDialogComponent } from './theme/theme-dialog.component';
import { AdsenseModule } from 'ng2-adsense';
import { ContactComponent } from './contact/contact.component';
import { ThemeDetailsComponent } from './theme/theme-details/theme-details.component';
@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeadnavComponent,
    AppComponent,
    AboutComponent,
    ContactComponent,
    SponsorsComponent,
    ScheduleComponent,
    EventsComponent,
    ThemeComponent,
    ThemeDetailsComponent,
    FaqComponent,
    ApplyComponent,
    ThemeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7689491302137996',
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
