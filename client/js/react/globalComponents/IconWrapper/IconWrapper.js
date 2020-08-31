import React from 'react';
import * as TYPES from 'prop-types';
import { IconContext } from 'react-icons';

function IconWrapper({ color, size, children, otherStyle }) {
  return (
    <IconContext.Provider value={{ style: { color, ...otherStyle }, size }}>
      {children}
    </IconContext.Provider>
  );
}

IconWrapper.propTypes = {
  color: TYPES.string,
  size: TYPES.string,
  otherStyle: TYPES.object,
  children: TYPES.node.isRequired,
};

IconWrapper.defaultProps = {
  id: '',
  color: '#2b2a2c',
  size: '1.5rem',
  otherStyle: {},
};

export default IconWrapper;
