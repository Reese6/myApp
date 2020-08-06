import React, { useState } from 'react';

import { InputGroup, Form } from '~/globalComponents';

export default function Registration() {
  const [state, setState] = useState({
    name: '',
    password: '',
    repassword: '',
  });

  return (
    <Form method="post" action="/accounts/registration">
      <InputGroup
        label="Имя"
        value={state.name}
        name="name"
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <InputGroup
        label="Пароль"
        value={state.password}
        name="password"
        type="password"
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <InputGroup
        label="Повторите пароль"
        value={state.repassword}
        name="repassword"
        type="password"
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
    </Form>
  );
}
