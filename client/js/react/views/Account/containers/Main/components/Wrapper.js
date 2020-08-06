import React from 'react';
import * as TYPES from 'prop-types';

function Wrapper({ children }) {
  return (
    <section className="account">
      <div className="account__wrapper">{children}</div>
    </section>
  );
}

Wrapper.propTypes = {
  children: TYPES.node.isRequired,
};

export default Wrapper;
