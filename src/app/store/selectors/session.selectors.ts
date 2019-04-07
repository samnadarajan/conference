import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSessions from '../reducers/session.reducer';

export const getSessionState = createFeatureSelector('sessions');

export const getAllSessions = createSelector(
  getSessionState,
  fromSessions.getSessionList
);

export const getAllSessionsLoaded = createSelector(
  getSessionState,
  fromSessions.getSessionLoaded
);
