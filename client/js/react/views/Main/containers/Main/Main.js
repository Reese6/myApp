import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Container from '../Container';

export default (() => {
  const root = document.getElementById('root');

  render(
    <BrowserRouter>
      <Container />
    </BrowserRouter>,
    root
  );
})();
