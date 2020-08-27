import React, { useState, useEffect } from 'react';

import { Root } from '~/globalComponents';
import Container from './containers';

import { configureStore } from '~/helpers';
import reducer from './rudecer/';
import { fetchingData } from './actions';

export default function Main() {
  const [store] = useState(configureStore('Projects', reducer));

  useEffect(() => {
    store.dispatch(fetchingData());
  }, []);

  return (
    <Root store={store}>
      <Container />
    </Root>
  );
}
