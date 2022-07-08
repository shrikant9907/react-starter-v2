import React from 'react'
import LoginForm from '../components/common/Form/LoginForm'

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='text-center py_20'>Login Page</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 w_400 mx-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage