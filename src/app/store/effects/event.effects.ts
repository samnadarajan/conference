import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {DataService} from '../../services/data.service';
import * as eventActions from '../actions/event.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {EventDetails} from '../../models/event-details.model';

const eventCollectionName = 'event';

@Injectable()
export class EventEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private _dataService: DataService) {}

  @Effect()
  loadSpeakers$ = this.actions$.pipe(
    ofType(eventActions.LOAD_EVENT),
    switchMap(() => {
      return this._dataService.getWithQuery(eventCollectionName, ref => ref.limit(1)).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as EventDetails;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }),
    map((data: any) => new eventActions.LoadEventSuccess(data)), // TODO typecast this
    catchError((error) => of(new eventActions.LoadEventFail(error)))
  );
}
