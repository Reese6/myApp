import { combineReducers } from 'redux';

import initialState from './initialState';
import { ACTION_TYPES } from '../constants';

const user = (state = initialState.user, { payload, type }) => {
  switch (type) {
    case ACTION_TYPES.RECEIVED_USER_SUCCESS:
      return payload.user;
    default:
      return state;
  }
};

export default combineReducers({ user });
