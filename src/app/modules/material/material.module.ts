import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule, MatFormFieldModule, MatInputModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class MaterialModule { }
