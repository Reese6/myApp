import React from 'react';
import * as TYPES from 'prop-types';
import { connect } from 'react-redux';

import { onControllerChange } from '../../actions/actionCreators';

function Controllers({
  isSignUp,
  onClick,
}) {
  return (
    <div className="login__controllers">
      <div
        className={`login__controllers-btn ${!isSignUp ? 'active' : ''}`}
        onClick={() => onClick(false)}
      >
        Авторизация
      </div>
      <div className="login__controllers-slash">/</div>
      <div
        className={`login__controllers-btn ${isSignUp ? 'active' : ''}`}
        onClick={() => onClick(true)}
      >
        Регистрация
      </div>
    </div>
  );
}

Controllers.propTypes = {
 isSignUp: TYPES.bool.isRequired,
 onClick: TYPES.func.isRequired,
};

const mapStateToProps = state => ({
  isSignUp: state.isSignUp,
});

const mapDispatchToProps = dispatch => ({
  onClick: e => dispatch(onControllerChange(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);

