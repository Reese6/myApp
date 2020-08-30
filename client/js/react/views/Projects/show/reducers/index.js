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

const columns = (state = initialState.columns, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_DATA:
      return payload.columns;
    default:
      return state;
  }
};

const tasks = (state = initialState.tasks, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_DATA:
      return payload.tasks;
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
  columns,
  tasks,
  error,
});
