import React, { useState } from 'react';

import { InputGroup, Form } from '~/globalComponents';

export default function Login() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  return (
    <Form method="post" action="/accounts/signin">
      <InputGroup
        label="Имя"
        value={state.username}
        name="username"
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <InputGroup
        label="Пароль"
        value={state.password}
        name="password"
        type="password"
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <button type="submit" value="Log-in" />
    </Form>
  );
}
