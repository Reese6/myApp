import React from 'react';
import * as TYPES from 'prop-types';
import { connect } from 'react-redux';

import { InputGroup } from '~g';
import { onFormChange } from '../../actions/actionCreators';

function Form({ name, password, rePassword, onChange }) {
  return (
    <form>
      <InputGroup label="Имя" value={name} name="name" onChange={onChange} />
      <InputGroup label="Имя" value={password} name="password" onChange={onChange} />
      <InputGroup label="Имя" value={rePassword} name="rePassword" onChange={onChange} />
    </form>
  );
}

Form.propTypes = {
  name: TYPES.string.isRequired,
  password: TYPES.string.isRequired,
  rePassword: TYPES.string.isRequired,
  onChange: TYPES.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.form.name,
  password: state.form.password,
  rePassword: state.form.rePassword,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(onFormChange(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
