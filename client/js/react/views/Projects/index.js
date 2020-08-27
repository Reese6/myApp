import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Index from './index/';

export default function Main() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`} component={Index} />
      {/* <Route exact path={`${path}/:ID`} component={Registration} /> */}
    </Switch>
  );
}
