import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';
import { useSelector } from 'react-redux';

import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Container({ children }) {
  const user = useSelector(state => state.user);

  return (
    <Fragment>
      <Header />
      {user.username && <Sidebar />}
      <div className="content">{children}</div>
      <div className="notification-container" id="notification-root" />
    </Fragment>
  );
}

Container.propTypes = {
  children: TYPES.node.isRequired,
};
