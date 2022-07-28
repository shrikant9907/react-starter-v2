import React from 'react';
import { Link } from 'react-router-dom';
import "./NavSidebar.scss";

const NavSidebar = () => {
  return (
<div className="flex-shrink-0 bg-light sidebar nooverlay active">
    <div className="sbheader">
      <Link className="shlink text-center" to="/">
        <span className="shtext">W3UI</span>
      </Link>
    </div>
    <div className="sbbody">
      <ul id="sidebarAccordion"> 
        <li>
          <span className="accordion-button-old btn btn-toggle collapsed">
            Components
          </span>
          <div className="collapse show">
            <ul className="btn-toggle-nav">
              <li><Link to="/alerts">Alerts</Link></li>
              <li><Link to="/breadcrum">Breadcrum</Link></li>
              <li><Link to="/progress-bars">Progress Bar</Link></li>
              <li><Link to="/loader">Loaders</Link></li>
              <li><Link to="/buttons">Buttons</Link></li>
              <li><Link to="/cards">Cards</Link></li>
              <li><Link to="/accordions">Accordions</Link></li>
              <li><Link to="/forms">Forms</Link></li>
              <li><Link to="/search-forms">Search Forms</Link></li>
              <li><Link to="/listing">Listings</Link></li>
              <li><Link to="/modals">Modals/Popups</Link></li>
              <li><Link to="/fonticons-modal">Fontawesome Modal</Link></li>
              <li><Link to="/pricing-tables">Pricing Tables</Link></li>
              <li><Link to="/social-icons">Social Icons</Link></li>
              <li><Link to="/tables">Tables</Link></li>
              <li><Link to="/tables2">Tables2</Link></li>
              <li><Link to="/star-icons">Star Icons</Link></li>
              <li><Link to="/repeaters">Repeaters</Link></li>
              <li><Link to="/paginations">Paginations</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div className="sbfooter">
      
    </div>
  </div>
  )
}

export default NavSidebar