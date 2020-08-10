import React from 'react';
import { render } from 'react-dom';
import Notification from './Notification';

export default text => {
  if (text) {
    const root = document.createElement('div');
    root.classList.add('notification');

    document.getElementById('notification-root').appendChild(root);

    const removeNotification = () => {
      root.remove();
    };

    // setTimeout(removeNotification, 15000);

    render(<Notification remove={removeNotification} text={text} />, root);

    setTimeout(() => {
      root.classList.add('show');
    }, 50);
  }
};
