import React from 'react';
import * as TYPES from 'prop-types';

function Wrapper({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  );
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};

export default Wrapper;
