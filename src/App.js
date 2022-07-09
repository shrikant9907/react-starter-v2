import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SiteNavbar from './components/Navbar/Navbar';
import { BlogRoutings } from './_config/BlogMenus';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <SiteNavbar brandname="React Starter Logo" logotype="text" logosrc="" />
        <Routes>
          {/* Top Menu Routes Configuration is in _config/TopMenus.js */}
          {
            BlogRoutings && BlogRoutings.map((route, ridx) => {
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