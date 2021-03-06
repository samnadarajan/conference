import {NgModule} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import {InformationPageComponent} from './components/information-page/information-page.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {CountdownTimerDirective} from '../../directives/countdown-timer.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  InformationPageComponent,
  ScheduleComponent,
  SpeakersComponent,
  CountdownTimerDirective
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [...modules],
  declarations: [
    InformationPageComponent,
    ScheduleComponent,
    SpeakersComponent,
    SpeakerComponent,
    CountdownTimerDirective
  ]
})
export class InfoModule { }
