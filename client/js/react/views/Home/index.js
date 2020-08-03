import React from 'react';

import { InputGroup } from '~/globalComponents';

export default function index() {
  const onChange = () => {
    console.log('1');
  };
  const onFocus = () => {
    console.log('2');
  };
  const onBlur = () => {
    console.log('3');
  };

  return (
    <div>
      <p>HEEEEELLOOOO</p>
      <InputGroup
        label={'Проверка'}
        name={'Проверка'}
        id={'Проверка'}
        value={'Проверка'}
        hasError
        isRequired
        disabled
        classNames="Проверка"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
