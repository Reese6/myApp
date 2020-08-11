import React from 'react';
import * as TYPES from 'prop-types';

function Content({ children }) {
  return (
    <div className="content">
      {children}
      <div id="notification-root" className="notification-container" />
    </div>
  );
}

Content.propTypes = {
  children: TYPES.node.isRequired,
};

export default Content;
