import {Action} from '@ngrx/store';
import {Speaker} from '../../models/speaker.model';

export const LOAD_SPEAKERS = '[SPEAKERS] Load';
export const LOAD_SPEAKERS_SUCCESS = '[SPEAKERS] Load Success';
export const LOAD_SPEAKERS_FAIL = '[SPEAKERS] Load Fail';

export class LoadSpeakers implements Action {
  readonly type = LOAD_SPEAKERS;

  constructor() {}
}

export class LoadSpeakersSuccess implements Action {
  readonly type = LOAD_SPEAKERS_SUCCESS;

  constructor(public payload: Speaker[]) {}
}

export class LoadSpeakersFail implements Action {
  readonly type = LOAD_SPEAKERS_FAIL;

  constructor(public payload: Error) {}
}


export type Actions = LoadSpeakers | LoadSpeakersSuccess | LoadSpeakersFail;
