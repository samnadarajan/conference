import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {EventDetails} from '../../../../models/event-details.model';
import {getEvent, getEventLoaded} from '../../../../store/selectors/event.selectors';
import * as SessionActions from '../../../../store/actions/session.actions';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as EventActions from '../../../../store/actions/event.actions';
import {AppState} from '../../../../store/app.state';
import * as AOS from 'aos';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationPageComponent implements OnInit {
  eventDetails$: Observable<EventDetails>;
  eventLoaded$: Observable<boolean>;

  eventDate: number = new Date('Apr 25, 2019 16:30:00').getTime();
  todayDate: number = new Date().getTime();
  countDown: any;

  constructor(private _store: Store<AppState>) {
    this.eventDetails$ = this._store.pipe(select(getEvent));
    this.eventLoaded$ = this._store.pipe(select(getEventLoaded));
  }

  public goToAbout(): void {
      const element = document.getElementById('about');
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  getCountdown(): any {
    const distance = this.eventDate - this.todayDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countDown = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  }

  ngOnInit() {
    AOS.init();

    this._store.dispatch(new EventActions.LoadEvent());
    this._store.dispatch(new SessionActions.LoadSessions()); // TODO fix this and move to schedule component

    this.getCountdown();
  }
}
