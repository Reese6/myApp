import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';

function Modal({ children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 10);
  }, []);

  return (
    <div className={`modal${active ? ' active' : ''}`}>
      <div className="modal__wrapper">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: TYPES.node.isRequired,
};

export default Modal;
