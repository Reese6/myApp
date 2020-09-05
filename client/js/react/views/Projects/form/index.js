import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Root } from '~/globalComponents';
import Container from './containers';

import { configureStore } from '~/helpers';
import { fetchingDataProject } from './actions';
import reducers from './reducers';

export default function index() {
  const { id } = useParams();
  const [store] = useState(configureStore(`project-${id ? `${id}-edit` : 'new'}`, reducers));

  useEffect(() => {
    if (id) {
      store.dispatch(fetchingDataProject(id));
    }
  }, []);

  return (
    <Root store={store}>
      <Container />
    </Root>
  );
}
