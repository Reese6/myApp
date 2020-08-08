import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Base from '~/views/layouts';
import Desk from '~/views/Desk';
import Settings from '~/views/Settings';
import Home from '~/views/Home';
import Account from '~/views/Account';

export default function Container() {
  return (
    <Base>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/desks" component={Desk} />
        <Route exact path="/settings" component={Settings} />
        <Route path="/account" component={Account} />
      </Switch>
    </Base>
  );
}
