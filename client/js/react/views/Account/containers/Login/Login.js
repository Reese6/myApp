import React, { useState } from 'react';

import { InputGroup, Form } from '~/globalComponents';

export default function Login() {
  const [state, setState] = useState({
    name: '',
    password: '',
  });

  return (
    <Form method="post" action="/accounts/login">
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
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
    </Form>
  );
}
