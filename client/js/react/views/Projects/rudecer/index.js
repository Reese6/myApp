import { combineReducers } from 'redux';

import initialState from './initialState';
import { ACTION_TYPES } from '../constants';

const projects = (state = initialState.projects, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_DATA_SUCCES:
      return payload.projects;
    default:
      return state;
  }
};

const isLoading = (state = initialState.isLoading, { type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_DATA_SUCCES:
    case ACTION_TYPES.ERROR_RECEIVED:
      return false;
    case ACTION_TYPES.START_RECEIVING:
      return true;
    default:
      return state;
  }
};

const isError = (state = initialState.isError, { type }) => {
  switch (type) {
    case ACTION_TYPES.ERROR_RECEIVED:
      return true;
    case ACTION_TYPES.START_RECEIVING:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  projects,
  isLoading,
  isError,
});
