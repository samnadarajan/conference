import {NgModule} from '@angular/core';
import {MatCardModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatButtonModule} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatButtonModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class MaterialModule { }
