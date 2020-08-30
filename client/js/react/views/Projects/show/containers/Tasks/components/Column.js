import React from 'react';
import * as TYPES from 'prop-types';

function Column({ name, children }) {
  return (
    <div className="tasks__column">
      <h3>{name}</h3>
      <div className="tasks__column-children">{children}</div>
    </div>
  );
}

Column.propTypes = {
  children: TYPES.node,
  name: TYPES.string.isRequired,
};

Column.defaultProps = {
  children: '',
};

export default Column;
