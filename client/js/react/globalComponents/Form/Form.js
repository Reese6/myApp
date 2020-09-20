import React from 'react';
import * as TYPES from 'prop-types';

import { getToken } from '~/helpers';
import { InputGroup } from '~/globalComponents';

function Form({ children, method, action, classNames, onSubmit }) {
  return (
    <form method={method} action={action} className={classNames} onSubmit={onSubmit}>
      <InputGroup name={getToken().name} value={getToken().value} hidden />
      {children}
    </form>
  );
}

Form.propTypes = {
  children: TYPES.node.isRequired,
  classNames: TYPES.string,
  method: TYPES.string,
  action: TYPES.string,
  onSubmit: TYPES.func,
};

Form.defaultProps = {
  action: '',
  classNames: '',
  method: 'post',
  onSubmit: () => {},
};

export default Form;
