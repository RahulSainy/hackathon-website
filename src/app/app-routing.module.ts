import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventsComponent } from './events/events.component';
import { ThemeComponent } from './theme/theme.component';
import { FaqComponent } from './faq/faq.component';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './results/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin@BRINDUSTIRES', component: AdminComponent },
  
  // { path: 'about', component: AboutComponent },
  // { path: 'sponsors', component: SponsorsComponent },
  // { path: 'schedule', component: ScheduleComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'theme', component: ThemeComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'apply', component: ApplyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
