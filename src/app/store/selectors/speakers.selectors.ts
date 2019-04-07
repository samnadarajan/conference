import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSpeakers from '../reducers/speakers.reducer';

export const getSpeakerState = createFeatureSelector('speakers');

export const getAllSpeakers = createSelector(
  getSpeakerState,
  fromSpeakers.getSpeakersList
);

export const getAllSpeakersLoaded = createSelector(
  getSpeakerState,
  fromSpeakers.getSpeakersLoaded
);
