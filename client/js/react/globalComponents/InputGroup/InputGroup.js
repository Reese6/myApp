import React from 'react';
import * as TYPES from 'prop-types';

import { uuid } from '~/helpers';

function InputGroup({
  label,
  name,
  id,
  value,
  type,
  hasError,
  hidden,
  isRequired,
  disabled,
  classNames,
  onChange,
  onFocus,
  onBlur,
  // ...otherProps,
}) {
  const className = [
    'input-group',
    hasError ? 'error' : '',
    disabled ? 'disabled' : '',
    hidden ? 'hidden' : '',
    classNames,
  ]
    .filter(e => e)
    .join(' ');

  const idInput = id || `input-group-${uuid()}`;

  return (
    <div className={className}>
      {label.length > 0 && (
        <label htmlFor={idInput}>
          <span>{label}</span>
          {isRequired && <span className="input-group__star-reqired"> *</span>}
        </label>
      )}
      <input
        id={idInput}
        name={name}
        type={type}
        hidden={hidden}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autocompleteinput="off"
        // {...otherProps}
      />
    </div>
  );
}

InputGroup.propTypes = {
  name: TYPES.string,
  id: TYPES.string,
  label: TYPES.string,
  value: TYPES.string.isRequired,
  type: TYPES.string,
  hasError: TYPES.bool,
  hidden: TYPES.bool,
  isRequired: TYPES.bool,
  disabled: TYPES.bool,
  classNames: TYPES.string,
  onChange: TYPES.func,
  onFocus: TYPES.func,
  onBlur: TYPES.func,
};

InputGroup.defaultProps = {
  label: '',
  name: '',
  id: '',
  type: 'text',
  hasError: false,
  hidden: false,
  isRequired: false,
  disabled: false,
  classNames: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

export default InputGroup;
