import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BsNavbar from './components/navbar/Navbar';
import { TopMenusRoutes } from './_config/TopMenus';

const App = () => {
  return (
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
  );
}
export default App;