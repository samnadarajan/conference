import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Speaker} from '../../../../models/speaker.model';
import {getAllSpeakers, getAllSpeakersLoaded} from '../../../../store/selectors/speakers.selectors';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store/app.state';
import * as SpeakersActions from '../../../../store/actions/speakers.actions';
import {MatDialog} from '@angular/material';
import {AdminSpeakerDialogComponent} from '../admin-speaker-dialog/admin-speaker-dialog.component';

@Component({
  selector: 'app-admin-speakers',
  templateUrl: './admin-speakers.component.html',
  styleUrls: ['./admin-speakers.component.scss']
})
export class AdminSpeakersComponent implements OnInit {
  speakerList$: Observable<Speaker[]>;
  speakersLoaded$: Observable<boolean>;

  readonly displayedColumns = ['name', 'biography', 'title', 'action'];

  constructor(private _store: Store<AppState>, private _dialog: MatDialog) {
    this.speakerList$ = this._store.pipe(select(getAllSpeakers));
    this.speakersLoaded$ = this._store.pipe(select(getAllSpeakersLoaded));
  }

  ngOnInit() {
    this._store.dispatch(new SpeakersActions.LoadSpeakers());
  }

  editSpeaker(speaker: Speaker) {
    this.openDialog(speaker);
  }

  openDialog(data?: Speaker): void {
    if (!data) {
      data = {name: '', profilePicture: '', biography: '', title: ''};
    }
    this._dialog.open(AdminSpeakerDialogComponent, {data: data});
  }

}
