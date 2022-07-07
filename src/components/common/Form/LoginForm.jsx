import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';
import Checkbox from './CheckBox/CheckBox';

export default function LoginForm(props) {

  let formTitle = 'Login';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    email: '',
    password: '',
    rememberme: 'no'
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);

  const formMessage = {
    emptyEmail: "Email is a required field.",
    invalidEmail: "Invalid email address.",
    emptyPassword: "Password is a required field.",
    formSuccess: "You are logged in successfully. Redirecting to dashboard page.",
  }

  const sendLoginRequest = () => {
    resetForm()
  }

  const resetForm = () => {
    setError(false);
    setFormData(initFormData);
  }

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData === null) {
      setError(true);
      return
    }

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return
    }

    if (formData.email) {
      if (!isValidEmail(formData.email)) {
        setError(true);
        return
      }
    }

    sendLoginRequest();

  };

  return (

    <div className="card cui2 py_30 px_20 rs-login-form">
      <div className="card-body pb-0">
        {formTitle !== '' && <div className="card-title text-primary text-uppercase text-center">{formTitle}</div>}
        <form className="fui fui2"
          action=""
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-group">
            <label>
              Email: <span className="text-danger">*</span>
            </label>
            {error && !formData?.email && <AlertBox type='danger' message={formMessage.emptyEmail} />}
            {error && formData?.email && !isValidEmail(formData.email) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control" placeholder="Enter your email." />
          </div>
          <div className="form-group">
            <label>
              Password: <span className="text-danger">*</span>
            </label>
            {error && !formData?.password && <AlertBox type='danger' message={formMessage.emptyPassword} />}
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="password" value={formData?.phone} type="password" className="form-control" placeholder="Enter your account password." />
          </div>
          <div className="form-group d-flex align-items-top justify-content-between mbi_10">
            <span><Checkbox value={formData.rememberme === 'no' ? 'yes' : 'no'} name="rememberme" onChange={(e) => handleFieldChange(e)} label="Remember Me" /></span>
            <span><Link className='text-muted tdn' to="/forgot-password">Forgot Password?</Link></span>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Login" />
          </div>
        </form>
        <div className="mb_20 d-flex align-items-center justify-content-center">
          <span>Don't have an account? <Link className='text-primary tdn' to="/signup">Sign up</Link></span>
        </div>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
