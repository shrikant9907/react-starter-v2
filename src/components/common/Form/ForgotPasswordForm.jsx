import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';
import { Link } from 'react-router-dom';

export default function ForgotPasswordForm(props) {

  let formTitle = 'Forgot Password';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    email: '',
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const formMessage = {
    emptyEmail: "Email is a required field.",
    invalidEmail: "Invalid email address.",
    formSuccess: "Reset password link has been sent your register email. Please check.",
  }

  const sendResetLinkRequest = () => {
    setSubmitStatus(true)
    resetForm()
  }

  const resetForm = () => {
    setError(false);
    setFormData(initFormData);

    setTimeout(() => {
      setSubmitStatus(false)
    }, 2000);
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

    if (!formData.email) {
      setError(true);
      return
    }

    if (formData.email) {
      if (!isValidEmail(formData.email)) {
        setError(true);
        return
      }
    }
 
    sendResetLinkRequest();

  };

  return (

    <div className="card cui2 py_30 px_20 rs-password-reset-form">
      <div className="card-body pb-0">
        {formTitle !== '' && <div className="text-primary text-center text-uppercase card-title">{formTitle}</div>}
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
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control mb_5" placeholder="Enter your registered email." />
            <div className='text-muted lh15 f12 text-sm'>* We will send a reset password link on your registered email address.</div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Get New Password" />
          </div>
          <div className="text-center mb_10">
            <Link className='text-primary tdn' to="/login">Go Back To Login</Link>
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
