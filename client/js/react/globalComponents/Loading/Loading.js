import React from 'react';
import * as TYPES from 'prop-types';

function Loading({ withBackground }) {
  return (
    <div className={`loading ${withBackground ? 'with-background' : ''}`}>
      <div className="loading__container">
        <div className="loading__item loading__item-1" />
        <div className="loading__item loading__item-2" />
        <div className="loading__item loading__item-3" />
        <div className="loading__item loading__item-4" />
        <div className="loading__item loading__item-5" />
        <div className="loading__item loading__item-6" />
        <div className="loading__item loading__item-7" />
        <div className="loading__item loading__item-8" />
      </div>
    </div>
  );
}

Loading.propTypes = {
  withBackground: TYPES.bool,
};

Loading.defaultProps = {
  withBackground: false,
};

export default Loading;
