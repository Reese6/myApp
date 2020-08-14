import React from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  // Links,
  Logo,
  Lk,
} from './components';

export default function Header() {
  const user = useSelector(state => state.user);

  return (
    <Wrapper>
      <Logo />
      {/* <Links /> */}
      {user.username && <Lk />}
    </Wrapper>
  );
}
