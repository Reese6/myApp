import React from 'react';
import * as TYPES from 'prop-types';

function Wrapper({ children }) {
  return <section className="inner-content">{children}</section>;
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};

export default Wrapper;
