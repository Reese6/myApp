import React from 'react';
import * as TYPES from 'prop-types';
import { NavLink } from 'react-router-dom';

function Button({ title, primary, type, onClick, classNames, children, link }) {
  const className = ['btn', primary ? 'btn-primary' : 'btn-default', classNames]
    .filter(e => e)
    .join(' ');

  const forLink = (
    <div className={`${className} d-contents`}>
      <NavLink to={link} activeClassName="active">
        {title || children}
      </NavLink>
    </div>
  );

  if (link) return forLink;

  return (
    <button className={className} type={type} onClick={onClick}>
      {title || children}
    </button>
  );
}

Button.propTypes = {
  title: TYPES.string,
  children: TYPES.node,
  link: TYPES.string,
  primary: TYPES.bool,
  classNames: TYPES.string,
  type: TYPES.string,
  onClick: TYPES.func,
};

Button.defaultProps = {
  title: '',
  children: '',
  link: '',
  type: 'button',
  primary: false,
  classNames: '',
  onClick: () => {},
};

export default Button;
