import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { InputGroup, Form, Loading, Notification, IconWrapper } from '~/globalComponents';

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

  const onSubmit = () => {
    setMessage('');

    const errooFields = [];

    if (s.password1.v !== s.password2.v || !s.password2.v) {
      errooFields.push('password2');
      if (s.password2.v) setMessage('Пароли не совпадают');
    }
    if (!s.password1.v || s.password1.v.length < 8) {
      errooFields.push('password1');
      if (s.password1.v && s.password1.v.length < 8)
        setMessage('Ваш пароль должен содержать не менее 8 символов');
    }
    if (!s.username.v) {
      errooFields.push('username');
    }

    if (errooFields.length === 0) {
      fetchingForm();

      return;
    }

    const obj = {};
    Object.keys(s).forEach(k => {
      obj[k] = {
        ...s[k],
        error: errooFields.includes(k),
      };
    });

    Notification('Заполните обязательные поля!', 'error');

    setState(obj);
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
        document.getElementById('account-login-link').click();
        Notification('Вы успешно зарегистрировались!', 'succes');
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

  const onNameBlur = e => {
    const reg = /[\sА-Яа-яЁё;:,|№~#={}[\]!?"%$&^*()""'<>`\\/\\/]/g;
    if (reg.test(e.target.value))
      Notification('Имя может содержать цифрры, латинские буквы, _, @, +, .и - символы');
    e.target.value = e.target.value.replace(reg, '');

    handleChange(e);
  };

  return (
    <Fragment>
      {isLoading && <Loading withBackground />}
      <div className="account__title">
        <NavLink to={`../account/login`}>
          <IconWrapper id="account-login-link" onClick={() => {}}>
            <IoMdArrowRoundBack />
          </IconWrapper>
        </NavLink>
        <h4>Регистрация</h4>
      </div>
      <Form>
        {message && <p className="text-error text-center">{message}</p>}
        <InputGroup
          label="Имя"
          value={s.username.v}
          hasError={s.username.error}
          name="username"
          onChange={handleChange}
          onBlur={onNameBlur}
        />
        <InputGroup
          label="Пароль"
          value={s.password1.v}
          hasError={s.password1.error}
          name="password1"
          type="password"
          onChange={handleChange}
        />
        <InputGroup
          label="Повторите пароль"
          value={s.password2.v}
          hasError={s.password2.error}
          name="password2"
          type="password"
          onChange={handleChange}
        />
        <button type="button" onClick={onSubmit} className="btn btn-primary btn-block">
          Зарегистрироваться
        </button>
      </Form>
    </Fragment>
  );
}
