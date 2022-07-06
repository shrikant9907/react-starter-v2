import React from 'react'
import BasicCard from '../../../components/common/Cards/BasicCard'

export default function ThemeCardComponents() {
  return (
    <div className="w-100 mb-5">
      <BasicCard data={{title: 'Card Title', text: 'Card Text', imgSrc:"http://via.placeholder.com/640x360", imgAlt:"Alt Text"}} />
    </div>
  )
}
 