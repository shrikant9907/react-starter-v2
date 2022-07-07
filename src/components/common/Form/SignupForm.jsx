import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';

export default function SignupForm(props) {

  let formTitle = 'Create An Account';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);

  const formMessage = {
    emptyName: "Name is a required field.",
    emptyEmail: "Email is a required field.",
    emptyPassword: "Password is a required field.",
    emptyCPassword: "Confirm Password is a required field.",
    passwordNotMatched: "Password and Confirm password not match.",
    invalidEmail: "Invalid email address.",
    formSuccess: "Your account has been created. Redirecting to dashboard page.",
  }

  const sendSignupRequest = () => {

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

  const isPasswordMatched = (password1, password2) => {
    return (password1 === password2);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (formData === null) {
      setError(true);
      return
    }

    if (!formData.name || !formData.email || !formData.password || !formData.cpassword) {
      setError(true);
      return
    }

    if (formData.email) {
      if (!isValidEmail(formData.email)) {
        setError(true);
        return
      }
    }

    if (formData.password && formData.cpassword && (formData.password !== formData.cpassword)) {
      setError(true);
      return
    }

    sendSignupRequest();

  };

  return (

    <div className="card cui2 py_30 px_20">
      <div className="card-body pb-0">
        {formTitle !== '' && <div className="card-title text-center">{formTitle}</div>}
        <form className="fui fui2"
          action=""
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-group">
            <label>
              Name: <span className="text-danger">*</span>
            </label>
            {error && !formData?.name && <AlertBox type='danger' message={formMessage.emptyName} />}
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="name" value={formData?.name} type="text" className="form-control" placeholder="Enter your full name." />
          </div>
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
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="password" value={formData?.password} type="password" className="form-control" placeholder="Enter a password." />
          </div>
          <div className="form-group">
            <label>
              Confirm Password: <span className="text-danger">*</span>
            </label>
            {error && !formData?.cpassword && <AlertBox type='danger' message={formMessage.emptyCPassword} />}
            {error && formData?.password && formData?.cpassword && !isPasswordMatched(formData.password, formData.cpassword) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="cpassword" value={formData?.cpassword} type="password" className="form-control" placeholder="Repeat your password." />
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>

  )
}
