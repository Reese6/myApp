import React from 'react';
import * as TYPES from 'prop-types';

import { getToken } from '~/helpers';
import { InputGroup } from '~/globalComponents';

function Form({ children, method, action, onSubmit }) {
  return (
    <form method={method} action={action} onSubmit={onSubmit}>
      <InputGroup name={getToken().name} value={getToken().value} hidden />
      {children}
    </form>
  );
}

Form.propTypes = {
  children: TYPES.node.isRequired,
  method: TYPES.string,
  action: TYPES.string,
  onSubmit: TYPES.func,
};

Form.defaultProps = {
  action: '',
  method: 'post',
  onSubmit: () => {},
};

export default Form;
