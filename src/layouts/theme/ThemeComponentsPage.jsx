import React from 'react';
import ThemeBasicComponents from './Demos/ThemeBasicComponents';
import ThemeCardComponents from './Demos/ThemeCardComponents';
import ThemeFormComponents from './Demos/ThemeFormComponents';

const ThemeComponentsPage = (props) => {

  return (
    <>
      <div className='py-3 theme-components'>
        <div className='container-fluid'>
          <ThemeBasicComponents />
          <ThemeFormComponents />
          <ThemeCardComponents />
        </div>
      </div>
    </>
  )
}

export default ThemeComponentsPage;