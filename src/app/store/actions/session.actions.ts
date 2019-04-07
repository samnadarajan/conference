import {Action} from '@ngrx/store';
import {Session} from '../../models/session.model';

export const LOAD_SESSIONS = '[Sessions] Load';
export const LOAD_SESSIONS_SUCCESS = '[Sessions] Load Success';
export const LOAD_SESSIONS__FAIL = '[Sessions] Load Fail';

export class LoadSessions implements Action {
  readonly type = LOAD_SESSIONS;
}

export class LoadSessionsSuccess implements Action {
  readonly type = LOAD_SESSIONS_SUCCESS;

  constructor(public payload: Session[]) {}
}

export class LoadSessionsFail implements Action {
  readonly type = LOAD_SESSIONS__FAIL;

  constructor(public payload: Error) {}
}

export type SessionActions = LoadSessions | LoadSessionsSuccess | LoadSessionsFail;
