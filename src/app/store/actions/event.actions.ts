import {Action} from '@ngrx/store';
import {EventDetails} from '../../models/event-details.model';

export const LOAD_EVENT = '[Event] Load';
export const LOAD_EVENT_SUCCESS = '[Event] Load Success';
export const LOAD_EVENT_FAIL = '[Event] Load Fail';

export class LoadEvent implements Action {
  readonly type = LOAD_EVENT;
}

export class LoadEventSuccess implements Action {
  readonly type = LOAD_EVENT_SUCCESS;

  constructor(public payload: EventDetails) {}
}

export class LoadEventFail implements Action {
  readonly type = LOAD_EVENT_FAIL;

  constructor(public payload: Error) {}
}

export type EventActions = LoadEvent | LoadEventSuccess | LoadEventFail;
