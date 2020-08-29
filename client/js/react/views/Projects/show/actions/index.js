import { ACTION_TYPES } from '../constants';

export const fetchingData = id => dispatch => {
  fetch(`/projects/${id}/get_show_project/`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .then(data => {
      if (data.status) {
        console.log(data);
        dispatch({
          type: ACTION_TYPES.RECEIVED_DATA,
          payload: {
            project: data.project[0],
          },
        });
      }
    })
    .catch(error => {
      dispatch({ type: ACTION_TYPES.ERROR_RECEIVED });
      console.error(error);
    });
};
