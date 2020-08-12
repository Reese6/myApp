import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';

import Header from '../Header';
import Content from '../Content';

export default function Container({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <Content>{children}</Content>
        <div id="notification-root" className="notification-container" />
      </div>
    </Fragment>
  );
}

Container.propTypes = {
  children: TYPES.node.isRequired,
};
