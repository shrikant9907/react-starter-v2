import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';

export default function NewsletterForm(props) {

  let formTitle = 'Get New Posts in Your Email';
  if (props.title) {
    formTitle = props.title;
  }

  let formDesc = 'Jobs, Interview Questions, Tutorials etc. Join 46,000 other people!';
  if (props.description) {
    formDesc = props.description;
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
    formSuccess: "Thank for subscribing to our newsletter.",
  }

  const sentSubscriptionRequest = () => {
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

    sentSubscriptionRequest();

  };

  return (

    <div className="card cui2 rs-login-form">
      <div className="card-body pri_30 pli_30 pti_30">
        {formTitle !== '' && <div className="text_bold f18 mb_10 text-primary">{formTitle}</div>}
        {formDesc !== '' && <p className="mb_20">{formDesc}</p>}
        <form className="fui1 w-100 text-left"
          action=""
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-group">
            {error && !formData?.email && <AlertBox type='danger' message={formMessage.emptyEmail} />}
            {error && formData?.email && !isValidEmail(formData.email) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control" placeholder="Enter your email." />
          </div>
          <div className="form-group">
            <input className="btn btn-primary btnui2 w-100" type="submit" name="submit" value="Subscribe Now" />
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>

      <JSONDebug data={formData} />
    </div>

  )
}
