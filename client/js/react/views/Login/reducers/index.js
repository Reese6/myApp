import { combineReducers } from 'redux';
import initialState from './initialState';
import { ACTION_TYPES } from '../constants';

const isSignUp = (state = initialState.isSignUp, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.ON_CONTROLLER_CHANGE:
      return payload.isSignUp;
    default:
      return state;
  }
};

const form = (state = initialState.form, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.ON_FORM_CHANGE:
      return {
        ...state,
        [payload.type]: payload.value,
      };
    default:
      return state;
  }
};

export default combineReducers({
  isSignUp,
  form,
});
