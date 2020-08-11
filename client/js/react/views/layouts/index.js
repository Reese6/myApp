import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';

import { Root } from '~/globalComponents';
import Container from './containers';

import configureStore from './configureStore';
import { fetchUser } from './actions';

export default function Main({ children }) {
  const [store] = useState(configureStore('layouts'));

  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);

  return (
    <Root store={store}>
      <Container>{children}</Container>
    </Root>
  );
}

Main.propTypes = {
  children: TYPES.node.isRequired,
};
