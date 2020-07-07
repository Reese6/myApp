import React from 'react'
import { render } from 'react-dom';

import App from '../layouts';

export default (() => {
  const root = document.getElementById('root');

  render(<App>HELLO!</App>, root);
})();
