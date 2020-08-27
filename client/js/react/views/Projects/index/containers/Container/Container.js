import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { TitlePage, Button, Loading } from '~/globalComponents';
import Projects from '../Projects';

function Container() {
  const { isLoading, isError } = useSelector(state => state);

  return (
    <div className="projects">
      <TitlePage title="Проекты">
        <Button primary>
          <AiOutlinePlusCircle />
          {/* <span>Проект</span> */}
        </Button>
      </TitlePage>
      {isLoading && <Loading />}
      {!isLoading && !isError && <Projects />}
    </div>
  );
}

Container.propTypes = {};

export default Container;
