import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { IoIosWarning } from 'react-icons/io';

import { IconWrapper } from '~/globalComponents';

function Notification({ text, remove, type }) {
  return (
    <Fragment>
      <IconWrapper
        classNames="notification__icon-info"
        size={type === 'error' ? '1.9rem' : '1.6rem'}
      >
        {type === 'info' && <FaInfoCircle />}
        {type === 'succes' && <FaCheckCircle />}
        {type === 'error' && <IoIosWarning />}
      </IconWrapper>
      <div className="notification__text">{text}</div>
      <IconWrapper classNames="notification__icon-close" onClick={remove}>
        <GrFormClose />
      </IconWrapper>
    </Fragment>
  );
}

Notification.propTypes = {
  text: TYPES.string.isRequired,
  type: TYPES.string.isRequired,
  remove: TYPES.func.isRequired,
};

export default Notification;
