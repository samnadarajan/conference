import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {DataService} from '../../services/data.service';
import * as sessionActions from '../actions/session.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Session} from '../../models/session.model';

const sessionCollectionName = 'sessions';

@Injectable()
export class SessionEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private _dataService: DataService) {}

  @Effect()
  loadSpeakers$ = this.actions$.pipe(
    ofType(sessionActions.LOAD_SESSIONS),
    switchMap(() => {
      return this._dataService.get(sessionCollectionName).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Session[];
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }),
    map((data: any) => new sessionActions.LoadSessionsSuccess(data)),
    catchError((error) => of(new sessionActions.LoadSessionsFail(error)))
  );
}
