import React from 'react';
import { BreadcrumbBar } from '../components/common/Breadcrumb';
import Image from '../components/common/Image/Image';

const AboutPage = (props) => {
  return (
    <>
      <h1 className='text-center py_40 m-0 text-uppercase bg-dark text-white'>Signup Page</h1>
      <BreadcrumbBar data={[{to: '/blog', label: 'Blog'}]} />
      <section className="common-section-ui pti_60">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image className="img-fluid mb_20" alt="" src="http://via.placeholder.com/640x360"/>
            </div>
            <div className="col-12 col-md-6 f14">
              <h3 className="heading_style type2 text-uppercase mb_20">About Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto accusamus, facilis omnis consectetur ducimus corrupti sapiente alias officiis eveniet laudantium! Officia voluptates esse reiciendis possimus molestias magni tempore quo!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto accusamus, facilis omnis consectetur ducimus corrupti sapiente alias officiis eveniet laudantium! Officia voluptates esse reiciendis possimus molestias magni tempore quo!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto accusamus, facilis omnis consectetur ducimus corrupti sapiente alias officiis eveniet laudantium! Officia voluptates esse reiciendis possimus molestias magni tempore quo!</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default AboutPage;