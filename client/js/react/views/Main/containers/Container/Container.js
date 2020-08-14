import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Base from '~/views/layouts';
import Projects from '~/views/Projects';
import Profile from '~/views/Profile';
import Home from '~/views/Home';
import Account from '~/views/Account';

export default function Container() {
  return (
    <Base>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/account" component={Account} />
      </Switch>
    </Base>
  );
}
