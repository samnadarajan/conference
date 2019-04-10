import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {MaterialModule} from '../material/material.module';
import { AdminSpeakersComponent } from './components/admin-speakers/admin-speakers.component';
import { AdminSpeakerDialogComponent } from './components/admin-speaker-dialog/admin-speaker-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const modules = [
  AdminPageComponent,
  AdminSpeakersComponent,
  AdminSpeakerDialogComponent
];
@NgModule({
  declarations: [...modules],
  exports: [...modules],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AdminSpeakerDialogComponent
  ]
})
export class AdminModule { }
