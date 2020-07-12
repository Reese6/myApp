import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default () => {
  const name = 'Login';

  const store = createStore(reducer, composeWithDevTools({ name })(applyMiddleware(thunk)));

  return store;
};
