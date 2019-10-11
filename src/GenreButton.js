import React from 'react';
import PropTypes from 'prop-types';

const GenreButton = ({children, url, styleName}) => {
  return (
    <a className={`btn ${styleName}`} href={url}>{children}</a>
  )
}

export default GenreButton;