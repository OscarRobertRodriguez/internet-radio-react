import React from 'react';
import PropTypes from 'prop-types';
import PanelHeader from './PanelHeader';
import ButtonList from './ButtonList';
import ButtonListItem from './GenreButton';
import MakeLargeBtns from './MakeLargeBtns';

const Panel = ({title, children}) => { 
  return (
     <div className='panel'>
     <PanelHeader title={title}/>
     <div className='btn-container'>
      {children}
     </div>
    </div>
  )
}

export default Panel; 

