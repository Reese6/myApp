import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Base from '~v/layouts';
import Desk from '~v/Desk';
import Settings from '~v/Settings';
import Home from '~v/Home';

export default function Container() {
  return (
    <Base>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/desks" component={Desk} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </Base>
  );
}
