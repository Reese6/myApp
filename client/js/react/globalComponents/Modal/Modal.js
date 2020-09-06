import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

import { IconWrapper } from '~/globalComponents';
import { uuid } from '~/helpers';

function Modal({ children, title, maxWidth, close }) {
  const [id] = useState(`Modal-${uuid()}`);
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

  const handleClose = () => {
    if (typeof close === 'string') {
      setActive(false);
      setTimeout(() => {
        document.getElementById(id).getElementsByTagName('a')[0].click();
      }, 100);
    } else if (typeof close === 'function') {
      close();
    }
  };

  return (
    <div className={`modal${active ? ' active' : ''}`}>
      {typeof close === 'string' && (
        <div className="hidden" id={id}>
          <NavLink to={close} />
        </div>
      )}
      <div className="modal__bg" onClick={handleClose} />
      <div className="modal__wrapper">
        <div className="modal__content" style={{ maxWidth }}>
          <div className="modal__content-close" onClick={handleClose}>
            <IconWrapper>
              <GrClose />
            </IconWrapper>
          </div>
          {title && <h2 className="modal__title">{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: TYPES.node.isRequired,
  maxWidth: TYPES.string,
  close: TYPES.oneOfType([TYPES.string, TYPES.func]).isRequired,
  title: TYPES.string,
};

Modal.defaultProps = {
  title: '',
  maxWidth: '650px',
};

export default Modal;
