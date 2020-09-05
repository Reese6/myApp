import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import { TitlePage, Loading } from '~/globalComponents';
import Projects from '../Projects';
import Form from '../../../form';

function Container() {
  const { path } = useRouteMatch();
  const { id } = useParams();
  const { isLoading, isError } = useSelector(state => state);

  return (
    <div className="projects d-contents">
      <TitlePage title="Проекты" titleButton="Создать проект" link="/projects/new" />
      {isLoading && <Loading />}
      {!isLoading && !isError && <Projects />}
      <Switch>
        <Route exact path={path.includes('new') ? `${path}` : `${path}/new`}>
          <Form />
        </Route>
        <Route exact path={`${path}/${id}/edit`}>
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
