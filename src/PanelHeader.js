import React from 'react';
import PropTypes from 'prop-types';


const PanelHeader = ({title}) => {
  return (
    <div className='panel-header'>
    <i className='fa fa-fire'></i>
    <h1>{title}</h1>
    </div>
  )
}


export default PanelHeader; 