import { ACTION_TYPES } from '../constants';

export const receivedData = form => ({
  type: ACTION_TYPES.GET_FORM,
  payload: {
    form,
  },
});

export const onFormChange = (value, type) => ({
  typre: ACTION_TYPES.ON_FORM_CHANGE,
  payload: {
    value,
    type,
  },
});

export const errorReceivedData = () => ({
  type: ACTION_TYPES.ERROR,
});
