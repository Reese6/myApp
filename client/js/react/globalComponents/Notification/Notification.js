import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import { FaCheckCircle } from 'react-icons/fa';

import { IconWrapper } from '~/globalComponents';

function Notification({ text, remove }) {
  return (
    <Fragment>
      <IconWrapper classNames="notification__icon-info">
        <FaCheckCircle />
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
  remove: TYPES.func.isRequired,
};

export default Notification;
