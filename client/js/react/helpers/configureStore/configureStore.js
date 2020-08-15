import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default (name, reducer) => {
  const store = createStore(reducer, composeWithDevTools({ name })(applyMiddleware(thunk)));

  return store;
};
