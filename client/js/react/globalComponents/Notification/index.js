import React from 'react';
import { render } from 'react-dom';
import Notification from './Notification';

export default text => {
  console.log('object');
  if (text) {
    const root = document.createElement('div');
    root.classList.add('notification');
    console.log('object2');

    document.body.appendChild(root);

    const removeNotification = () => {
      root.remove();
    };

    // setTimeout(removeNotification, 15000);

    render(<Notification remove={removeNotification} text={text} />, root);
  }
};
