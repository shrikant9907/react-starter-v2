import React from 'react';
import ThemeCardComponents from './Demos/ThemeCardComponents';
// import ThemeFormComponents from './Demos/ThemeFormComponents';

const ThemeComponentsPage = (props) => {

  return (
    <>
      <div className='py-3 theme-components'>
        <div className='container'>

          {/* <ThemeFormComponents /> */}

          <ThemeCardComponents />
          
        </div>
      </div>
    </>
  )
}

export default ThemeComponentsPage;