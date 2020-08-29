import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { configureStore } from '~/helpers';
import { Root } from '~/globalComponents';
import Container from './containers';

import reducers from './reducers';
import { fetchingData } from './actions';

export default function Show() {
  const { id } = useParams();
  const [store] = useState(configureStore(`project-${id}`, reducers));

  useEffect(() => {
    store.dispatch(fetchingData(id));
  }, []);

  return (
    <Root store={store}>
      <Container />
    </Root>
  );
}
