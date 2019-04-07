import {SpeakersState} from './reducers/speakers.reducer';

export interface AppState {
  readonly speakers: SpeakersState;
}
