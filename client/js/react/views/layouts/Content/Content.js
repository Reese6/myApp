import React from 'react';
import * as TYPES from 'prop-types';

function Content({
  children
}) {
  return (
    <div className="content">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: TYPES.node.isRequired,
};

export default Content;
