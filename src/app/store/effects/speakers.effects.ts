import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {DataService} from '../../services/data.service';
import * as speakerActions from '../actions/speakers.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Speaker} from '../../models/speaker.model';
import {of} from 'rxjs';

const speakersCollectionName = 'speakers';

@Injectable()
export class SpeakersEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private _dataService: DataService) {}

  @Effect()
  loadSpeakers$ = this.actions$.pipe(
    ofType(speakerActions.LOAD_SPEAKERS),
    switchMap(() => {
      return this._dataService.get(speakersCollectionName).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Speaker[];
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }),
    map((data: any) => new speakerActions.LoadSpeakersSuccess(data)),
    catchError((error) => of(new speakerActions.LoadSpeakersFail(error)))
  );

  @Effect()
  saveSpeakers$ = this.actions$.pipe(
    ofType(speakerActions.SAVE_SPEAKER),
    map((action: speakerActions.SaveSpeaker) => action.payload),
    switchMap((data: Speaker) => {
      return new Promise((resolve) => {
        if (data.id) {
          this._dataService.update(speakersCollectionName, data);
        } else {
          this._dataService.add(speakersCollectionName, data);
        }
        resolve(true);
      });
    }),
    map(() => new speakerActions.SaveSpeakerSuccess()),
    catchError((error) => of(new speakerActions.SaveSpeakerFail(error)))
  );
}
