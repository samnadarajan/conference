import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {EventDetails} from '../../../../models/event-details.model';
import {getEvent, getEventLoaded} from '../../../../store/selectors/event.selectors';
import * as SessionActions from '../../../../store/actions/session.actions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as EventActions from '../../../../store/actions/event.actions';
import {AppState} from '../../../../store/app.state';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationPageComponent implements OnInit {
  eventDetails$: Observable<EventDetails>;
  eventLoaded$: Observable<boolean>;

  constructor(private _store: Store<AppState>) {
    this.eventDetails$ = this._store.pipe(select(getEvent));
    this.eventLoaded$ = this._store.pipe(select(getEventLoaded));
  }

  ngOnInit() {
    this._store.dispatch(new EventActions.LoadEvent());
    this._store.dispatch(new SessionActions.LoadSessions()); // TODO fix this and move to schedule component
  }
}
