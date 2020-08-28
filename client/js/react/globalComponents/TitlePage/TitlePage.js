import React from 'react';
import * as TYPES from 'prop-types';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Button } from '~/globalComponents';

function TitlePage({ children, title, link, button, titleButton }) {
  return (
    <section className="title-page">
      {title && <div className="title-page__title">{title}</div>}
      <div className="title-page__children">
        {(link || button) && (
          <Button primary link={link} onClick={button}>
            <AiOutlinePlusCircle />
            <span>{titleButton}</span>
          </Button>
        )}
        {children}
      </div>
    </section>
  );
}

TitlePage.propTypes = {
  children: TYPES.node,
  title: TYPES.string,
  titleButton: TYPES.string,
  button: TYPES.func,
  link: TYPES.string,
};

TitlePage.defaultProps = {
  children: '',
  title: '',
  titleButton: '',
  button: null,
  link: '',
};

export default TitlePage;
