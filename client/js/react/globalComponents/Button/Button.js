import React from 'react';
import * as TYPES from 'prop-types';

function Button({ title, primary, type, onClick, classNames }) {
  const className = ['btn', primary ? 'btn-primary' : 'btn-dfault', classNames]
    .filter(e => e)
    .join(' ');

  return (
    <button className={className} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: TYPES.node,
  primary: TYPES.bool,
  classNames: TYPES.string,
  type: TYPES.string,
  onClick: TYPES.func,
};

Button.defaultProps = {
  title: '',
  type: 'button',
  primary: false,
  classNames: '',
  onClick: () => {},
};

export default Button;
