import {NgModule} from '@angular/core';
import {MatCardModule, MatDividerModule, MatToolbarModule} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class MaterialModule { }
