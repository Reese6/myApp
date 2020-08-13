import React from 'react';
import { render } from 'react-dom';
import Notification from './Notification';

export default (text, type) => {
  if (text) {
    const root = document.createElement('div');
    root.classList.add('notification', type || 'info');

    document.getElementById('notification-root').appendChild(root);

    const removeNotification = () => {
      root.remove();
    };

    // setTimeout(removeNotification, 15000);

    render(<Notification remove={removeNotification} text={text} type={type || 'info'} />, root);

    setTimeout(() => {
      root.classList.add('show');
    }, 50);
  }
};
