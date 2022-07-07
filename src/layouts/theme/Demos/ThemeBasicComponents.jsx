import React from 'react'
import AlertBox from '../../../components/common/Alert/AlertBox'
import Loader from '../../../components/common/Loader/Loader'
import SocialLinks from '../../../components/common/Link/SocialLinks'
import CustomPagination from '../../../components/common/Pagination/CustomPagination'
import ContactForm from '../../../components/common/Form/ContactForm'
import LoginForm from '../../../components/common/Form/LoginForm'
import SignupForm from '../../../components/common/Form/SignupForm'
import ForgotPasswordForm from '../../../components/common/Form/ForgotPasswordForm'
import ChangePasswordForm from '../../../components/common/Form/ChangePasswordForm'
import NewsletterForm from '../../../components/common/Form/NewsletterForm'

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
              fbLink: "#",
              twLink: "#",
              igLink: "#",
              ytLink: "#",
              cpLink: "#",
              ghLink: "#",
            }
          } />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <CustomPagination data={['test']} />
        </div>

      </div>
      <div className='row'>
        <div className="col-12 col-sm-6 col-md-4">
          <ContactForm />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <LoginForm />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <SignupForm />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <ForgotPasswordForm />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <ChangePasswordForm />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <NewsletterForm />
        </div>
      </div>
    </React.Fragment>
  )
}
