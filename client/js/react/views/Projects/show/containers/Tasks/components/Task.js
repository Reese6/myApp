import React from 'react';
import * as TYPES from 'prop-types';

function Task({ name, description }) {
  return (
    <div className="tasks__task">
      <div className="tasks__task-header">{name}</div>
      <div className="tasks__task-content">{description}</div>
    </div>
  );
}

Task.propTypes = {
  name: TYPES.string.isRequired,
  description: TYPES.string.isRequired,
};

export default Task;
