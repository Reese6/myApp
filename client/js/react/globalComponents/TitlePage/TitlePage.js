import React from 'react';
import * as TYPES from 'prop-types';

function TitlePage({ children, title }) {
  return (
    <section className="title-page">
      {title && <div className="title-page__title">{title}</div>}
      {children && <div className="title-page__children">{children}</div>}
    </section>
  );
}

TitlePage.propTypes = {
  children: TYPES.node,
  title: TYPES.string,
};

TitlePage.defaultProps = {
  children: '',
  title: '',
};

export default TitlePage;
