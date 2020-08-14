import React from 'react';
import * as TYPES from 'prop-types';
import { IconContext } from 'react-icons';
import { uuid } from '~/helpers';

function IconWrapper({ color, size, classNames, children, onClick, otherStyle, id }) {
  const styleWrapper = {
    cursor: onClick ? 'pointer' : 'default',
    fontSize: 0,
  };

  const idIcon = id || `icon-${uuid()}`;

  return (
    <IconContext.Provider value={{ style: { color, ...otherStyle }, size }}>
      <div id={idIcon} className={classNames} onClick={onClick} style={styleWrapper}>
        {children}
      </div>
    </IconContext.Provider>
  );
}

IconWrapper.propTypes = {
  id: TYPES.string,
  color: TYPES.string,
  size: TYPES.string,
  classNames: TYPES.string,
  otherStyle: TYPES.object,
  children: TYPES.node.isRequired,
  onClick: TYPES.func,
};

IconWrapper.defaultProps = {
  id: '',
  color: '#2b2a2c',
  size: '1.5rem',
  classNames: '',
  otherStyle: {},
  onClick: null,
};

export default IconWrapper;
