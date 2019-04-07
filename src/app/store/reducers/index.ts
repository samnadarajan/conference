import * as fromSpeakers from './speakers.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  speakers: fromSpeakers.SpeakersState;
}

export const reducers: ActionReducerMap<State> = {
  speakers: fromSpeakers.speakersReducer
};
