import React, { useState, Fragment } from 'react';

import { InputGroup } from '~g';

export default function Registration() {
  const [state, setState] = useState({
    name: '',
    password: '',
  });

  return (
    <Fragment>
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
    </Fragment>
  );
}
