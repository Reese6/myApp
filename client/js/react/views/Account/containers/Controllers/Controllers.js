import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

function Controllers() {
  const { url } = useRouteMatch();
  return (
    <div className="account__controllers">
      <NavLink to={`${url}/login`} activeClassName="active">
        Авторизация
      </NavLink>
      <div className="account__controllers-slash">/</div>
      <NavLink to={`${url}/registration`} activeClassName="active">
        Регистрация
      </NavLink>
    </div>
  );
}

export default Controllers;
