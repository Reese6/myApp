import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineProfile } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';

import { IconWrapper } from '~/globalComponents';

export default function Sidebar() {
  const sizeIcon = '1.7rem';

  return (
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <Link to="/desks">
          <IconWrapper size={sizeIcon}>
            <AiOutlineProfile />
          </IconWrapper>
          <div>Доски</div>
        </Link>
        <Link to="/settings">
          <IconWrapper size={sizeIcon}>
            <IoMdSettings />
          </IconWrapper>
          <div>Настройки</div>
        </Link>
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
