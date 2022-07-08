import React from 'react'
import SignupForm from '../components/common/Form/SignupForm' 

const SignupPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='text-center py_20'>Signup Page</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 w_400 mx-auto">
            <SignupForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignupPage