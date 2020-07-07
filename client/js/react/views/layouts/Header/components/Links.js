import React from 'react'

import urls from '../config';

export default function Links() {
  return (
    <nav className="header__nav">
      {urls.map(({ url, name }, i) => (
        <a href={url} key={i} className="header__nav-link">{name}</a>
      ))}
    </nav>
  )
}
