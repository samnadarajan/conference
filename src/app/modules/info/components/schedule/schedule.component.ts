import { Component } from '@angular/core';
import {Session} from '../../../../models/session.model';
import {Observable} from 'rxjs';
import {AppState} from '../../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {getAllSessions, getAllSessionsLoaded} from '../../../../store/selectors/session.selectors';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  sessionList$: Observable<Session[]>;
  sessionListLoaded$: Observable<boolean>;

  constructor(private _store: Store<AppState>) {
    this.sessionList$ = this._store.pipe(select(getAllSessions));
    this.sessionListLoaded$ = this._store.pipe(select(getAllSessionsLoaded));
  }

}
