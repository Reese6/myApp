import React from 'react';

function Controllers() {
  return (
    <div className="login__controllers">
      <div className={`login__controllers-btn ${'active'}`}>Авторизация</div>
      <div className="login__controllers-slash">/</div>
      <div className={`login__controllers-btn ${'active'}`}>Регистрация</div>
    </div>
  );
}

export default Controllers;
