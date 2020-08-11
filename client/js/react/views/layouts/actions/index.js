import { ACTION_TYPES } from '../constants';

export const fetchUser = () => dispatch => {
  fetch('/get_user')
    .then(response => {
      if (response.ok) {
        console.log('object');
        return response.json();
      } else {
        throw new Error('bad fetch user!');
      }
    })
    .then(user =>
      dispatch({
        type: ACTION_TYPES.RECEIVED_USER_SUCCESS,
        payload: {
          user,
        },
      })
    )
    .catch(error => {
      console.error(error);
    });
};
