import React from 'react';
import { useSelector } from 'react-redux';

export default function Lk() {
  const user = useSelector(state => state.user);

  return (
    <div className="header__user">
      <div className="header__user-img" />
      <div className="header__user-name">{user.username}</div>
    </div>
  );
}
