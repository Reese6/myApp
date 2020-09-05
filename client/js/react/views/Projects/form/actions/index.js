import * as actions from './actionCreators';

export { actions };

export const fetchingDataProject = id => dispatch => {
  fetch(`projects/${id}/details`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(form => dispatch(actions.receivedData(form)))
    .catch(e => {
      dispatch(actions.errorReceivedData());
      console.error(e);
    });
};
