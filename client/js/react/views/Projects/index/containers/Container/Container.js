import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { TitlePage, Loading } from '~/globalComponents';
import Projects from '../Projects';
import New from '../../../new';

function Container() {
  const { path } = useRouteMatch();
  const { isLoading, isError } = useSelector(state => state);

  return (
    <div className="projects d-contents">
      <TitlePage title="Проекты" titleButton="Создать проект" link="/projects/new" />
      {isLoading && <Loading />}
      {!isLoading && !isError && <Projects />}
      <Switch>
        <Route path={path.includes('new') ? `${path}` : `${path}/new`}>
          <New />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
