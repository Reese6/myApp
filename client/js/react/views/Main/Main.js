import React from 'react'
import { render } from 'react-dom';

import App from '@/App';

export default (() => {
  console.log(App)
  const root = document.getElementById('root');

  render(<App>HELLO!</App>, root);
})();
