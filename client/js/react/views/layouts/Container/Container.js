import React from 'react';
import * as TYPES from 'prop-types';

import Header from '../Header';
import Content from '../Content';
import { Wrapper } from './components';

export default function Container({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

Container.propTypes =  {
  children: TYPES.node.isRequired,
};
