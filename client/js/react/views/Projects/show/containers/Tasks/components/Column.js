import React from 'react';
import * as TYPES from 'prop-types';

function Column({ name, children }) {
  return (
    <div className="tasks__column">
      <div className="tasks__column-header">{name}</div>
      <div className="tasks__column-content">{children}</div>
      <div className="tasks__column-footer" />
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
