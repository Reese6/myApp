import React from 'react';
import * as TYPES from 'prop-types';
import { v4 } from 'uuid';

function InputGroup({
  label,
  name,
  id,
  value,
  hasError,
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
    classNames,
  ].join(' ');

  return (
    <div className={className}>
      {label.length > 0 && (
        <label htmlFor={id}>
          <span>{label}</span>
          {isRequired && <span className="input-group__star-reqired"> *</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
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
  hasError: TYPES.bool,
  isRequired: TYPES.bool,
  disabled: TYPES.bool,
  classNames: TYPES.string,
  onChange: TYPES.func.isRequired,
  onFocus: TYPES.func,
  onBlur: TYPES.func,
};

InputGroup.defaultProps = {
  label: '',
  name: '',
  id: `input-group-${v4()}`,
  hasError: false,
  isRequired: false,
  disabled: false,
  classNames: '',
  onFocus: () => {},
  onBlur: () => {},
};

export default InputGroup;
