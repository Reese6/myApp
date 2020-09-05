import { combineReducers } from 'redux';

import initialState from './initialState';
import { ACTION_TYPES } from '../constants';

const form = (state = initialState.form, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.GET_FORM:
      return payload.form;
    case ACTION_TYPES.ON_FORM_CHANGE:
      return {
        ...state,
        [payload.type]: {
          value: payload.value,
          error: false,
        },
      };
    default:
      return state;
  }
};

const error = (state = initialState.error, { type }) => {
  switch (type) {
    case ACTION_TYPES.ERROR:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  form,
  error,
});
