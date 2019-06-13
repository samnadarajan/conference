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
import { Spring2019Component } from './components/spring2019/spring2019.component';
import { FooterComponent } from './components/footer/footer.component';

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
    CountdownTimerDirective,
    Spring2019Component,
    FooterComponent
  ]
})
export class InfoModule { }
