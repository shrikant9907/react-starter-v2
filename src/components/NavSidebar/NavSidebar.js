import React from 'react';
import { Link } from 'react-router-dom';
import "./NavSidebar.scss";

const NavSidebar = () => {

  const sidebarLinks = [
    {
      active: true,
      label: 'Accordion',
      link: 'accordion',
    },
    {
      active: true,
      label: 'Alert',
      link: 'alert'
    },
    {
      active: true,
      label: 'Breadcrum',
      link: 'breadcrum'
    },
    {
      active: true,
      label: 'Button',
      link: 'button'
    },
    {
      active: true,
      label: 'Card',
      link: 'card'
    },
    {
      active: true,
      label: 'Form',
      link: 'form'
    },
    {
      active: true,
      label: 'Listing',
      link: 'listing'
    },
    {
      active: true,
      label: 'Loader',
      link: 'loader'
    },
    {
      active: true,
      label: 'Modal',
      link: 'modal'
    },
    {
      active: true,
      label: 'Pagination',
      link: 'pagination'
    },
    {
      active: true,
      label: 'Pricing Table',
      link: 'pricing-table'
    },
    {
      active: true,
      label: 'Progress Bar',
      link: 'progress-bar'
    },
    {
      active: true,
      label: 'Social Icon',
      link: 'social-icon'
    },
    {
      active: true,
      label: 'Star Icon',
      link: 'star-icon'
    },
    {
      active: true,
      label: 'Table',
      link: 'table'
    },
  ]

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
                {sidebarLinks && sidebarLinks.map((item, idx) => <li key={idx}><Link to={`/${item.link}`}>{item.label}</Link></li>)}
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