import React from 'react';
import * as TYPES from 'prop-types';

export default function Wrapper() {
  return (
    <div className='content__wrapper'>

    </div>
  );
};

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};
