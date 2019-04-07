import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import {MaterialModule} from '../material/material.module';

const modules = [
  AdminPageComponent
]
@NgModule({
  declarations: [...modules],
  exports: [...modules],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdminModule { }
