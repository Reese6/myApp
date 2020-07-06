import React from 'react';
import * as TYPES from 'prop-types';

import { Content, Header } from '../';
import { Wrapper } from './components';

export default function App({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

App.propTypes =  {
  children: TYPES.node.isRequired,
};
