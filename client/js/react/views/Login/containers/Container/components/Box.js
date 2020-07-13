import React from 'react';
import * as TYPES from 'prop-types';

function Box({ children }) {
  return (
    <section className="login">
      <div className="login__wrapper">{children}</div>
    </section>
  );
}

Box.propTypes = {
  children: TYPES.node.isRequired,
};

export default Box;
