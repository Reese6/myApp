import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Controllers from '../Controllers';
import Login from '../Login';
import Registration from '../Registration';
import { Wrapper } from './components';

export default function Main() {
  return (
    <Wrapper>
      <Controllers />
      <Switch>
        <Route exact path="account/login" component={Login} />
        <Route exact path="account/registration" component={Registration} />
        {/* <Route /> */}
      </Switch>
    </Wrapper>
  );
}
