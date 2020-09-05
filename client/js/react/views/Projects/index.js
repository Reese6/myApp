import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Index from './index/';
import Show from './show';

export default function Main() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <Index />
      </Route>
      <Route exact path={`${path}/new`}>
        <Index />
      </Route>
      <Route exact path={`${path}/:id/edit`}>
        <Index />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Show />
      </Route>
    </Switch>
  );
}
