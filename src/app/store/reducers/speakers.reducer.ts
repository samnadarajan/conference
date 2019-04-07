import {Speaker} from '../../models/speaker.model';
import * as SpeakerActions from '../actions/speakers.actions';

export interface SpeakersState {
  list: Speaker[];
  error: any;
  loaded: boolean;
}

export const initialSpeakersState: SpeakersState = {
  list: [],
  error: '',
  loaded: true
};

export function speakersReducer(state = initialSpeakersState, action: SpeakerActions.Actions) {
  switch (action.type) {
    case(SpeakerActions.LOAD_SPEAKERS):
      console.log(action.payload);
      return {...state, loaded: false};
    case(SpeakerActions.LOAD_SPEAKERS_SUCCESS):
      return {...state, list: action.payload, loaded: true};
    case(SpeakerActions.LOAD_SPEAKERS_FAIL):
      return {...state, error: action.payload, loaded: true};
    default:
      return state;
  }
}
