import { ACTION_TYPES } from '../constants';

export const fetchUser = () => dispatch => {
  fetch('/get_user')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('bad fetch user!');
      }
    })
    .then(data => {
      console.log(window.location);
      if (data.status) {
        dispatch({
          type: ACTION_TYPES.RECEIVED_USER_SUCCESS,
          payload: {
            user: data.user,
          },
        });
      } else if (!window.location.pathname.includes('account')) {
        window.location = '/account/login/';
      }
    })
    .catch(error => {
      console.error(error);
    });
};
