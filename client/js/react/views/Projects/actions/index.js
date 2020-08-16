import { ACTION_TYPES } from '../constants';

export const fetchingData = () => dispatch => {
  dispatch({ type: ACTION_TYPES.START_RECEIVING });

  fetch('/projects/get_projects')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => {
      if (data.status) {
        dispatch({
          type: ACTION_TYPES.RECEIVED_DATA_SUCCES,
          payload: {
            projects: data.data,
          },
        });
      }
    })
    .catch(error => {
      dispatch({ type: ACTION_TYPES.ERROR_RECEIVED });
      console.error(error);
    });
};
