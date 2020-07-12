import { ACTION_TYPES } from "../constants";

export const onControllerChange = isSignUp => ({
  type: ACTION_TYPES.ON_CONTROLLER_CHANGE,
  payload: {
    isSignUp
  },
});

export const onFormChange = e => ({
  type: ACTION_TYPES.ON_FORM_CHANGE,
  payload: {
    value: e.target.value,
    type: e.target.name,
  },
});
