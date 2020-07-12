import React from 'react';

import { Root } from '~g';
import Container from '../Container';
import configureStore from '../../configureStore';

export default () => {
  const store = configureStore();

  return (
    <Root store={store}>
      <Container />
    </Root>
  );
}
