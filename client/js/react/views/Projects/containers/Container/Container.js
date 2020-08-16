import React from 'react';
// import * as TYPES from 'prop-types';

import { TitlePage, Button } from '~/globalComponents';
import Projects from '../Projects';

function Container() {
  return (
    <div className="projects">
      <TitlePage title="Проекты">
        <Button primary title="Новый проект" />
      </TitlePage>
      <Projects />
    </div>
  );
}

Container.propTypes = {};

export default Container;
