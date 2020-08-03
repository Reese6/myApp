import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';

function Wrapper({ children }) {
  return <Fragment>{children}</Fragment>;
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};

export default Wrapper;
