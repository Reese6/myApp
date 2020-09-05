import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';

function Modal({ children, title }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.querySelector('.content').classList.add('no-scroll');
    setTimeout(() => {
      setActive(true);
    }, 10);

    return () => {
      document.querySelector('.content').classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={`modal${active ? ' active' : ''}`}>
      <div className="modal__bg" />
      <div className="modal__wrapper">
        {title && <h4 className="modal__title">{title}</h4>}
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: TYPES.node.isRequired,
  title: TYPES.string,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
