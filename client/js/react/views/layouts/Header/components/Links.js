import React from 'react';
import { Link } from 'react-router-dom';

import urls from '../config';

export default function Links() {
  return (
    <nav className="header__nav">
      {urls.map(({ url, name }, i) => (
        <Link to={url} key={i} className="header__nav-link">{name}</Link>
      ))}
    </nav>
  )
}
