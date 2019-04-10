import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Speaker} from '../../../../models/speaker.model';
import * as SpeakersActions from '../../../../store/actions/speakers.actions';
import {AppState} from '../../../../store/app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-admin-speaker-dialog',
  templateUrl: './admin-speaker-dialog.component.html',
  styleUrls: ['./admin-speaker-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSpeakerDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AdminSpeakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Speaker,
    private _store: Store<AppState>) { }

  save(speaker: Speaker) {
    this._store.dispatch(new SpeakersActions.SaveSpeaker(speaker));
    this.close();
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
