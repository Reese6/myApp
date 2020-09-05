import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';

function Modal({ children, title, maxWidth }) {
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
      <div className="modal__wrapper" style={{ maxWidth }}>
        {title && <h2 className="modal__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: TYPES.node.isRequired,
  maxWidth: TYPES.string,
  title: TYPES.string,
};

Modal.defaultProps = {
  title: '',
  maxWidth: '650px',
};

export default Modal;
