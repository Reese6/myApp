import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';

import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Container({ children }) {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
      <div className="notification-container" id="notification-root" />
    </Fragment>
  );
}

Container.propTypes = {
  children: TYPES.node.isRequired,
};
