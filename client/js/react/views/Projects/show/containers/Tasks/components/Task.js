import React from 'react';
import * as TYPES from 'prop-types';

function Task({ name, description }) {
  return (
    <div className="tasks__task">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

Task.propTypes = {
  name: TYPES.string.isRequired,
  description: TYPES.string.isRequired,
};

export default Task;
