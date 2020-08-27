import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { InputGroup, Form } from '~/globalComponents';

export default function Login() {
  const [s, setState] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    if (s.username && s.password) {
      const form = document.getElementsByTagName('form')[0];

      const response = await fetch('/accounts/signin/', {
        method: 'post',
        body: new FormData(form),
      });

      if (response.ok) {
        const j = await response.json();

        if (j.user_login) {
          window.location = '/';
        } else {
          setMessage('Вы ввели не правильный логин или пароль!');
        }
      } else {
        setMessage('Произошла ошибка на стороне сервера... пропробуйте позже :(');
      }
    }

    return false;
  };

  return (
    <Fragment>
      <div className="account__title">
        <h4>Авторизация</h4>
      </div>
      <Form onSubmit={onSubmit}>
        {message && <p className="text-error text-center">{message}</p>}
        <InputGroup
          label="Имя"
          value={s.username}
          name="username"
          onChange={e => setState({ ...s, [e.target.name]: e.target.value })}
        />
        <InputGroup
          label="Пароль"
          value={s.password}
          name="password"
          type="password"
          onChange={e => setState({ ...s, [e.target.name]: e.target.value })}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Войти
        </button>
      </Form>
      <div className="account__footer text-center">
        <span>Нет аккаунта? </span>
        <NavLink to={`/account/registration`}>Зарегистрироваться</NavLink>
      </div>
    </Fragment>
  );
}
