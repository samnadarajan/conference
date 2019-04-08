import {Speaker} from '../../models/speaker.model';
import * as SpeakerActions from '../actions/speakers.actions';

export interface SpeakersState {
  list: Speaker[];
  current: Speaker;
  error: any;
  loaded: boolean;
}

export const initialSpeakersState: SpeakersState = {
  list: [{name: '', profilePicture: '', biography: '', title: ''}],
  current: {} as Speaker,
  error: '',
  loaded: true
};

export function speakersReducer(state = initialSpeakersState, action: SpeakerActions.SpeakersActions) {
  switch (action.type) {
    case(SpeakerActions.LOAD_SPEAKERS):
      return {...state, loaded: false};
    case(SpeakerActions.LOAD_SPEAKERS_SUCCESS):
      return {...state, list: action.payload, loaded: true};
    case(SpeakerActions.LOAD_SPEAKERS_FAIL):
      return {...state, error: action.payload, loaded: true};
    case(SpeakerActions.SAVE_SPEAKER):
      return {...state, current: action.payload, loaded: false};
    case(SpeakerActions.SAVE_SPEAKER_SUCCESS):
      return {...state,  loaded: true};
    case(SpeakerActions.SAVE_SPEAKER_FAIL):
      return {...state, error: action.payload, loaded: true};
    default:
      return state;
  }
}

export const getSpeakersList = (state: SpeakersState) => state ? state.list : [];
export const getSpeakersLoaded = (state: SpeakersState) => state ? state.loaded : null;

