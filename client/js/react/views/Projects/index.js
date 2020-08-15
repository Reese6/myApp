import React from 'react';

import { Root } from '~/globalComponents';
import { configureStore } from '~/helpers';
import reducer from './rudecer/';

export default function Main() {
  const store = configureStore('Projects', reducer);

  return (
    <Root store={store}>
      <div>Projects</div>
    </Root>
  );
}
