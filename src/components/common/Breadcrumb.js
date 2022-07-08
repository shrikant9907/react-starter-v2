import React from 'react'
import { Link } from 'react-router-dom'

export const BreadcrumbBar = (props) => {

  let bcData = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const bcLast = bcData.pop();

  if (props.data) {
    bcData = props.data;
  }

  return (
    <section className="common-section-ui page-breadcrumb bg-light pti_15 pbi_15">
      <div className="container">
        <nav>
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item"><Link className='tdn' to="/">Home</Link></li>
            { bcData.map((bc, idx) => <li key={idx} className="breadcrumb-item"><Link className='tdn' to={bc.to}>{bc.label}</Link></li>) }
            <li className="breadcrumb-item active">{bcLast.label}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
