import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BsNavbar from './components/navbar/Navbar';
import { TopMenusRoutes } from './_config/TopMenus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <BsNavbar brandname="React Starter Logo" logotype="text" logosrc="" />
        <Routes>
          {/* Top Menu Routes Configuration is in _config/TopMenus.js */}
          {
            TopMenusRoutes && TopMenusRoutes.map((route, ridx) => {
              return <Route {...route} key={ridx} />
            })
          }
        </Routes>
      </Router>
      <ToastContainer />
    </React.Fragment>
  );
}
export default App;