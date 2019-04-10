import {Component, OnInit, HostListener} from '@angular/core';
import {AppState} from './store/app.state';
import {select, Store} from '@ngrx/store';
import * as EventActions from './store/actions/event.actions';
import {Observable} from 'rxjs';
import {EventDetails} from './models/event-details.model';
import {getEvent, getEventLoaded} from './store/selectors/event.selectors';
import * as SessionActions from './store/actions/session.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scrollPosition: number;

  constructor() {}

  public goToSection(section): void {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.pageYOffset;
  }

  ngOnInit() {
    this.onWindowScroll();
  }
  // eventDetails$: Observable<EventDetails>;
  // eventLoaded$: Observable<boolean>;
  //
  // constructor(private _store: Store<AppState>) {
  //   this.eventDetails$ = this._store.pipe(select(getEvent));
  //   this.eventLoaded$ = this._store.pipe(select(getEventLoaded));
  // }
  //
  // ngOnInit() {
  //   this._store.dispatch(new EventActions.LoadEvent());
  //   this._store.dispatch(new SessionActions.LoadSessions()); // TODO fix this and move to schedule component
  // }
}
