import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineProfile } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';

import { IconWrapper } from '~/globalComponents';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <Link to="/desks">
          <IconWrapper>
            <AiOutlineProfile />
          </IconWrapper>
          <div>Доски</div>
        </Link>
        <Link to="/settings">
          <IconWrapper>
            <IoMdSettings />
          </IconWrapper>
          <div>Настройки</div>
        </Link>
        <div className="flex-1" />
        <Link to="/logout">
          <IconWrapper>
            <RiLogoutBoxLine />
          </IconWrapper>
          <div>Выход</div>
        </Link>
      </div>
    </section>
  );
}
