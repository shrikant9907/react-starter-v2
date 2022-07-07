import React from 'react'
import AlertBox from '../../../components/common/Alert/AlertBox'
import Loader from '../../../components/common/Loader/Loader'
import SocialLinks from '../../../components/common/Link/SocialLinks'
import CustomPagination from '../../../components/common/Pagination/CustomPagination'
import ContactForm from '../../../components/common/Form/ContactForm'

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
        <div className="col-12 col-sm-6 col-md-4">
          <CustomPagination data={['test']} />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <ContactForm data={['test']} />
        </div>
      </div>
    </React.Fragment>
  )
}
