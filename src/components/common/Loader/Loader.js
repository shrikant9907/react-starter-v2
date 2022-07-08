import React from 'react'
import { SpinnerIcon } from '../../../_assets/icons/Icons'

export default function Loader(props) {
  return (
    <div className="loader f50 loader-col static">
      <SpinnerIcon />
      { props.text && <span className="loader-text f16 mt_4">{props?.text}</span> }
    </div>
  )
}
