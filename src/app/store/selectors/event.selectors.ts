import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromEvent from '../reducers/event.reducer';

export const getEventState = createFeatureSelector('event');

export const getEvent = createSelector(
  getEventState,
  fromEvent.getEventDetails
);

export const getEventLoaded = createSelector(
  getEventState,
  fromEvent.getEventLoaded
);
