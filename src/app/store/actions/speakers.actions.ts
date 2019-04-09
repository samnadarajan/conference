import {Action} from '@ngrx/store';
import {Speaker} from '../../models/speaker.model';

export const LOAD_SPEAKERS = '[SPEAKERS] Load';
export const LOAD_SPEAKERS_SUCCESS = '[SPEAKERS] Load Success';
export const LOAD_SPEAKERS_FAIL = '[SPEAKERS] Load Fail';
export const SAVE_SPEAKER = '[SPEAKERS] Save';
export const SAVE_SPEAKER_SUCCESS = '[SPEAKERS] Save Success';
export const SAVE_SPEAKER_FAIL = '[SPEAKERS] Save Fail';

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

export class SaveSpeaker implements Action {
  readonly type = SAVE_SPEAKER;

  constructor(public payload: Speaker) {}
}

export class SaveSpeakerSuccess implements Action {
  readonly type = SAVE_SPEAKER_SUCCESS;

  constructor() {}
}

export class SaveSpeakerFail implements Action {
  readonly type = SAVE_SPEAKER_FAIL;

  constructor(public payload: Error) {}
}


export type SpeakersActions =
  LoadSpeakers |
  LoadSpeakersSuccess |
  LoadSpeakersFail |
  SaveSpeaker |
  SaveSpeakerSuccess |
  SaveSpeakerFail;
