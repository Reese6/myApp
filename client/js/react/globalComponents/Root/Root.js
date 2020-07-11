import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';
import { Provider } from 'react-redux';

export default function Root({ children, store }) {
  const withStore = <Provider store={store}>{children}</Provider>;

  const withoutStore = <Fragment>{children}</Fragment>;

  return store === null ? withoutStore : withStore;
}

Root.propTypes = {
  children: TYPES.node.isRequired,
  store: TYPES.object,
};

Root.defaultProps = {
  store: null,
};
