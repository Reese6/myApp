import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

export default function Lk() {
  const user = useSelector(state => state.user);

  return (
    <div className="header__user">
      {user.username && (
        <Fragment>
          <div className="header__user-img" />
          <div className="header__user-name">{user.username}</div>
        </Fragment>
      )}
      {!user.username && <div className="header__user-name">Добро пожаловать</div>}
    </div>
  );
}
