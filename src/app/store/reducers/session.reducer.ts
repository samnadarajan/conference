import {Session} from '../../models/session.model';
import * as sessionActions from '../actions/session.actions';

export interface SessionState {
  list: Session[];
  error: any;
  loaded: boolean;
}

export const initialSessionState: SessionState = {
  list: [],
  error: {},
  loaded: false
}

export function sessionReducer(state = initialSessionState, action: sessionActions.SessionActions) {
  switch (action.type) {
    case (sessionActions.LOAD_SESSIONS):
      return {...state, loaded: false};
    case (sessionActions.LOAD_SESSIONS_SUCCESS):
      return {...state, list: action.payload, loaded: true};
    case (sessionActions.LOAD_SESSIONS__FAIL):
      return {...state, error: action.payload, loaded: true};
  }
}

export const getSessionList = (state: SessionState) => state ? state.list : [];
export const getSessionLoaded = (state: SessionState) => state ? state.loaded : null;
