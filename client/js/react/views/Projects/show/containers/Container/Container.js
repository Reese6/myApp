import React from 'react';
import { useSelector } from 'react-redux';

import { TitlePage } from '~/globalComponents';

export default function Container() {
  const { project } = useSelector(state => state);

  return (
    <div className="project d-contents">
      <TitlePage title={project.name || 'Проект'} />
    </div>
  );
}
