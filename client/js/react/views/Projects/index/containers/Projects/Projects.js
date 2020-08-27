import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { primary_color } from '~/styleConstants';

function Projects() {
  const { projects } = useSelector(state => state);

  console.log(projects);

  return (
    <Fragment>
      {projects.length > 0 && (
        <ul className="projects__items-wrapper">
          {projects.map((el, i) => (
            <li
              key={i}
              className="projects__item"
              style={
                el.avatar
                  ? { backgroundImage: `url(/images/${el.avatar})` }
                  : { backgroundColor: primary_color }
              }
            >
              <div className="projects__item-bg" />
              <NavLink to={`/projects/${el.id}`}>
                <div className="projects__item-title">{el.name}</div>
                <div className="projects__item-text">{el.description}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

Projects.propTypes = {};

export default Projects;
