import * as fromSpeakers from './speakers.reducer';
import * as fromEvent from './event.reducer';
import * as fromSessions from './session.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  speakers: fromSpeakers.SpeakersState;
  event: fromEvent.EventState;
  sessions: fromSessions.SessionState;
}

export const reducers: ActionReducerMap<State> = {
  speakers: fromSpeakers.speakersReducer,
  event: fromEvent.eventReducer,
  sessions: fromSessions.sessionReducer
};
