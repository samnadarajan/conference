import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../../store/app.state';
import {select, Store} from '@ngrx/store';
import * as SpeakersActions from '../../../../store/actions/speakers.actions';
import {Observable} from 'rxjs';
import {Speaker} from '../../../../models/speaker.model';
import {getAllSpeakers, getAllSpeakersLoaded} from '../../../../store/selectors/speakers.selectors';
import {getAllSessions, getAllSessionsLoaded} from '../../../../store/selectors/session.selectors';
import {Session} from '../../../../models/session.model';
import * as sessionActions from '../../../../store/actions/session.actions';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  sessionList$: Observable<Session[]>;
  sessionListLoaded$: Observable<boolean>;
  speakerList$: Observable<Speaker[]>;
  speakersLoaded$: Observable<boolean>;

  constructor(private _store: Store<AppState>) {
    this.speakerList$ = this._store.pipe(select(getAllSpeakers));
    this.speakersLoaded$ = this._store.pipe(select(getAllSpeakersLoaded));

    this.sessionList$ = this._store.pipe(select(getAllSessions));
    this.sessionListLoaded$ = this._store.pipe(select(getAllSessionsLoaded));
  }

  ngOnInit() {
    this._store.dispatch(new SpeakersActions.LoadSpeakers());

    this._store.dispatch(new sessionActions.LoadSessions());

  }

}
