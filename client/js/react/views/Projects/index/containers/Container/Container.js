import React from 'react';
import { useSelector } from 'react-redux';

import { TitlePage, Button, Loading } from '~/globalComponents';
import Projects from '../Projects';

function Container() {
  const { isLoading, isError } = useSelector(state => state);

  return (
    <div className="projects d-contents">
      <TitlePage title="Проекты" titleButton="Создать проект" link="/projects/new">
        <Button title="New project" link="/projects/new" />
      </TitlePage>
      {isLoading && <Loading />}
      {!isLoading && !isError && <Projects />}
    </div>
  );
}

Container.propTypes = {};

export default Container;
