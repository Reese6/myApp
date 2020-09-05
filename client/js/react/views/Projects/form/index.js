import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Root } from '~/globalComponents';
import { configureStore } from '~/helpers';
import { fetchingDataProject } from './actions';

export default function index() {
  const { id } = useParams();
  const [store] = useState(configureStore(`project-${id ? `${id}-edit` : 'new'}`));

  useEffect(() => {
    if (id) {
      store.dispatch(fetchingDataProject(id));
    }
  }, []);

  return (
    <Root store={store}>
      <div>asdasdasd</div>
    </Root>
  );
}
