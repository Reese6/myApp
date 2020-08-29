import { combineReducers } from 'redux';

import initialState from './initialState';
import { ACTION_TYPES } from '../constants';

const project = (state = initialState.project, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_DATA:
      return payload.project;
    default:
      return state;
  }
};

const error = (state = initialState.error, { type }) => {
  switch (type) {
    case ACTION_TYPES.ERROR_RECEIVED:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  project,
  error,
});
