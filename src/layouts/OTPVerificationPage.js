import React from 'react'
import OTPVerificationForm from '../components/common/Form/OTPVerificationForm'

const OTPVerificationPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='text-center py_20'>OTP Verification Page</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 w_400 mx-auto">
            <OTPVerificationForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OTPVerificationPage