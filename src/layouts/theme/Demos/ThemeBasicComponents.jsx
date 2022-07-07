import React from 'react'
import AlertBox from '../../../components/common/Alert/AlertBox'
import Loader from '../../../components/common/Loader/Loader'
import SocialLinks from '../../../components/common/Link/SocialLinks'

export default function ThemeBasicComponents(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <AlertBox dismissible={true} message="Alert Box" />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <Loader text="Loading Page..." />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <SocialLinks icons={
            {
              fbLink:"#",
              twLink:"#",
              igLink:"#",
              ytLink:"#",
              cpLink:"#",
              ghLink:"#",
            }
          } />
        </div>
      </div>
    </React.Fragment>
  )
}
