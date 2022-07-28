import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbPage = () => {
  
  return (
    <section class="common-section-ui page-breadcrumb bg-light pti_20 pbi_20">
      <div class="container">
        <p class="text-muted f14 m-0">
          <Link to="/" class="text-primary tdn">Home</Link>
          <span> / </span>
          <Link to="/blog" class="text-primary tdn">Blog</Link>
          <span> / </span>
          <span className='text-muted'>My Blog Page</span>
        </p>
      </div>
    </section>
  )
}

export default BreadcrumbPage