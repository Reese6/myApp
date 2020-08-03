import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Controllers from '../Controllers';
import Login from '../Login';
import Registration from '../Registration';
import { Wrapper } from './components';

export default function Main() {
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <Controllers />
      <Switch>
        <Route exact path={`${path}/login`} component={Login} />
        <Route exact path={`${path}/registration`} component={Registration} />
      </Switch>
    </Wrapper>
  );
}
