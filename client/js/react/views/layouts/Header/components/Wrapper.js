import React from 'react';
import * as TYPES from 'prop-types';

function Wrapper({ children }) {
  return (
    <header className="header">
      <div className="header__inner">
        {children}
      </div>
    </header>
  );
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};

export default Wrapper;
