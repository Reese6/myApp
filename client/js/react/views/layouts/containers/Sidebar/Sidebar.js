import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa';

import { IconWrapper } from '~/globalComponents';

export default function Sidebar() {
  const sizeIcon = '1.7rem';

  return (
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <NavLink to="/profile" activeClassName="active">
          <IconWrapper size={sizeIcon}>
            <FaRegUser />
          </IconWrapper>
          <div>Профиль</div>
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <IconWrapper size={sizeIcon}>
            <GrProjects />
          </IconWrapper>
          <div>Проекты</div>
        </NavLink>
        <div className="flex-1" />
        <a href="/logout">
          <IconWrapper size={sizeIcon}>
            <RiLogoutBoxLine />
          </IconWrapper>
          <div>Выход</div>
        </a>
        <div className="flex-1" />
      </div>
    </section>
  );
}
