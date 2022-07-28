import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopMenusRoutes } from './_config/TopMenus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavSidebar from './components/NavSidebar/NavSidebar';

const App = () => {
  return (
    <div className='bodysidebar'>
      <Router>
          <NavSidebar />
          <div className="page pt_40 px_20">
            <Routes>
              {
                TopMenusRoutes && TopMenusRoutes.map((route, ridx) => {
                  return <Route {...route} key={ridx} />
                })
              }
            </Routes>
          </div>
      </Router>
      <ToastContainer />
    </div>
  );
}
export default App;