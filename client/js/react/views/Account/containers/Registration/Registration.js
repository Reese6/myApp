import React, { useState, Fragment } from 'react';

import { InputGroup, Form, Loading, Notification } from '~/globalComponents';

export default function Registration() {
  const [s, setState] = useState({
    username: {
      v: '',
      error: false,
    },
    password1: {
      v: '',
      error: false,
    },
    password2: {
      v: '',
      error: false,
    },
  });
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmit = e => {
    Notification('Вы успешно зарегистрировались!');
    e.preventDefault();
    setMessage('');

    const errooFields = [];

    if (s.password1.v !== s.password2.v) {
      errooFields.push('password2');
      setMessage('Пароли не совпадают');
    }
    if (s.password1.v.length < 8) {
      errooFields.push('password1');
      setMessage('Ваш пароль должен содержать не менее 8 символов');
    }
    if (!s.username.v) {
      errooFields.push('username');
      setMessage('Заполните имя');
    }

    if (errooFields.length === 0) {
      fetchingForm();
    } else {
      errooFields.forEach(k => {
        setState({
          ...s,
          [k]: {
            ...s[k],
            error: true,
          },
        });
      });
    }

    return false;
  };

  const fetchingForm = async () => {
    setLoading(true);
    const form = document.getElementsByTagName('form')[0];

    const response = await fetch('/accounts/signup', {
      method: 'post',
      body: new FormData(form),
    });

    if (response.ok) {
      const j = await response.json();
      setLoading(false);
      if (j.status) {
        // window.location = '/account/login';
        Notification('Вы успешно зарегистрировались!');
      } else {
        setMessage(j.error);
      }
    } else {
      setMessage('Произошла ошибка на стороне сервера... пропробуйте позже :(');
      setLoading(false);
    }
  };

  const handleChange = e => {
    setState({
      ...s,
      [e.target.name]: {
        v: e.target.value,
        error: false,
      },
    });
  };

  return (
    <Fragment>
      {isLoading && <Loading withBackground />}
      <Form onSubmit={onSubmit}>
        {message && <p className="text-error text-center">{message}</p>}
        <InputGroup label="Имя" value={s.username.v} name="username" onChange={handleChange} />
        <InputGroup
          label="Пароль"
          value={s.password1.v}
          name="password1"
          type="password"
          onChange={handleChange}
        />
        <InputGroup
          label="Повторите пароль"
          value={s.password2.v}
          name="password2"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </Form>
    </Fragment>
  );
}
