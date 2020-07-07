import React, { Fragment } from 'react';
import * as TYPES from 'prop-types';
import { v4 } from 'uuid';

function InputGroup({
  label,
  id,
  value,
  hasError,
  isRequired,
  onChange,
  onFocus,
  onBlur,
}) {
  const className = [
    'form-froup',
    hasError || 'error',
  ].join(' ');

  return (
    <div className={classNameForGroup}>
      {label.length > 0 && (
        <label for={id}>
          <span>{label}</span>
          {isRequired && <span className="form-group__star-reqired"> *</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoCompleteInput="off"
      />
    </div>
  );
}

InputGroup.propTypes = {
  name: TYPES.string,
  id: TYPES.string,
  label: TYPES.string.isRequired,
  value: TYPES.string.isRequired,
  hasError: TYPES.bool,
  isRequired: TYPES.bool,
  disabled: TYPES.bool,
  onChange: TYPES.func.isRequired,
  onFocus: TYPES.func.isRequired,
  onBlur: TYPES.func.isRequired,
};

InputGroup.defaultProps = {
  label: '',
  name: '',
  id: `input-group-${v4()}`,
  hasError: false,
  isRequired: false,
  disabled: false,
  onFocus: () => {},
  onBlur: () => {},
};

export default InputGroup;

