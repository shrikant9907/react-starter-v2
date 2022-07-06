import React from 'react'
import BasicCard from '../../../components/common/Cards/BasicCard'
import IconCard from '../../../components/common/Cards/IconCard/IconCard'
import PostCard from '../../../components/common/Cards/PostCard'
import TestimonialCard from '../../../components/common/Cards/TestimonialCard/TestimonialCard'

export default function ThemeCardComponents() {
  return (
    <div className="w-100 mb-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <BasicCard
            data={{
              title: 'Card Title',
              text: 'Card Text',
              imgSrc: "http://via.placeholder.com/640x360",
              imgAlt: "Alt Text"
            }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <IconCard data={{
            id: '1',
            title: 'Card Title',
            icon: <i className="fas fa-cloud"></i>,
            iconLocation: 'right',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          }} />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <TestimonialCard data={{
            id: '1',
            person: 'Shrikant Yadav',
            company: 'Company Name',
            imgsrc: 'https://shrikant9907.github.io/webstyle/images/user_logo.png',
            imgalt: 'Shrikant Image',
            text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          }} />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <PostCard  data={{
              title: 'Card Title',
              text: 'Card Text',
              imgSrc: "http://via.placeholder.com/640x360",
              imgAlt: "Alt Text"
            }} />
        </div>

      </div>
    </div>
  )
}
