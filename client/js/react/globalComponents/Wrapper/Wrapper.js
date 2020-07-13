import React from 'react';
import * as TYPES from 'prop-types';

export default function Wrapper({ children }) {
  return <div className="content__wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};
