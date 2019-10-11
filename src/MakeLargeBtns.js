  import React from 'react';

  
  const MakeLargeBtns = ({children}) => {

    let items = React.Children.toArray(children);
   
  let clones = items.map(item => {
     return React.cloneElement(item => {
       item.className = 'btn--large'
     })
   })
    return React.cloneElement(items, {
      className: 'btn--large'
    })
  }


  export default MakeLargeBtns; 