import React from 'react';
import * as TYPES from 'prop-types';

function InputGroup({
  
}) {
  return (
    <div className="form-group">
      <label></label>
      <input />
    </div>
  );
}

InputGroup.propTypes = {
  label: TYPES.string.isRequired,
  value: TYPES.string.isRequired,
  hasError: TYPES.bool,
  isRequired: TYPES.bool,
  onChange: TYPES.func.isRequired,
  onFocus: TYPES.func.isRequired,
  onBlur: TYPES.func.isRequired,
};

InputGroup.defaultProps = {

};

export default InputGroup;

