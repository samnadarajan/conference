import {Component, OnInit} from '@angular/core';
import {AppState} from './store/app.state';
import {select, Store} from '@ngrx/store';
import * as EventActions from './store/actions/event.actions';
import {Observable} from 'rxjs';
import {EventDetails} from './models/event-details.model';
import {getEvent, getEventLoaded} from './store/selectors/event.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  eventDetails$: Observable<EventDetails>;
  eventLoaded$: Observable<boolean>;

  constructor(private _store: Store<AppState>) {
    this.eventDetails$ = this._store.pipe(select(getEvent));
    this.eventLoaded$ = this._store.pipe(select(getEventLoaded));
  }

  ngOnInit() {
    this._store.dispatch(new EventActions.LoadEvent());
  }
}
