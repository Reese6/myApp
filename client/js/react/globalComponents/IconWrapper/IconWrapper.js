import React from 'react';
import * as TYPES from 'prop-types';
import { IconContext } from 'react-icons';

function IconWrapper({ color, size, classNames, children, onClick, otherStyle }) {
  const styleWrapper = {
    cursor: onClick ? 'pointer' : 'default',
    fontSize: 0,
  };

  return (
    <IconContext.Provider value={{ style: { color, ...otherStyle }, size }}>
      <div className={classNames} onClick={onClick} style={styleWrapper}>
        {children}
      </div>
    </IconContext.Provider>
  );
}

IconWrapper.propTypes = {
  color: TYPES.string,
  size: TYPES.string,
  classNames: TYPES.string,
  otherStyle: TYPES.object,
  children: TYPES.node.isRequired,
  onClick: TYPES.func,
};

IconWrapper.defaultProps = {
  color: '#2b2a2c',
  size: '1.5rem',
  classNames: '',
  otherStyle: {},
  onClick: null,
};

export default IconWrapper;
