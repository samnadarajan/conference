import {EventDetails} from '../../models/event-details.model';
import * as EventActions from '../actions/event.actions';

export interface EventState {
  details: EventDetails;
  loaded: boolean;
  error: any;
}

export const initialState: EventState = {
  details: {name: '', description: '', address: '', date: new Date(), room: ''},
  loaded: true,
  error: {}
};

export function eventReducer(state = initialState, action: EventActions.EventActions) {
  switch (action.type) {
    case (EventActions.LOAD_EVENT):
    return {...state, loaded: false};
    case (EventActions.LOAD_EVENT_SUCCESS):
      return {...state, details: action.payload, loaded: true};
    case (EventActions.LOAD_EVENT_FAIL):
      return {...state, error: action.payload, loaded: true};
    default:
      return state;
  }
}

export const getEventDetails = (state: EventState) => state ? state.details : {};
export const getEventLoaded = (state: EventState) => state ? state.loaded : null;
