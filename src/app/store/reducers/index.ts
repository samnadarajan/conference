import * as fromSpeakers from './speakers.reducer';
import * as fromEvent from './event.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  speakers: fromSpeakers.SpeakersState;
  event: fromEvent.EventState;
}

export const reducers: ActionReducerMap<State> = {
  speakers: fromSpeakers.speakersReducer,
  event: fromEvent.eventReducer
};
