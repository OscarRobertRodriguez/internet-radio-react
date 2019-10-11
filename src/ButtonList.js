import React from 'react';
import PropTypes from 'prop-types';
import ButtonListItem from './GenreButton';



const ButtonList = ({children}) => {
   


  return (
    <div className='btn-container'>
     {children}
    </div>
  )
}


export default ButtonList;