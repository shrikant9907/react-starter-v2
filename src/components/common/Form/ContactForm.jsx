import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';

export default function ContactForm(props) {

  let formTitle = 'Get In Touch';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const formMessage = {
    emptyName: "Name is a required field.",
    emptyEmail: "Email is a required field.",
    invalidEmail: "Invalid email address.",
    invalidPhone: "Invalid phone number.",
    emptyMessage: "Message is a required field.",
    formSuccess: "Message sent successfully. Thank you form contacting us.",
  }

  const sendMail = () => {
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

  // const isValidPhone = (phone) => {
  //   var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //   return regex.value.match(phone)
  // }

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

    // if (formData.phone) {
    //   if (!isValidPhone(formData.phone)) {
    //     setError(true);
    //     return
    //   }
    // }

    sendMail();

  };

  return (

    <div className="card cui2 py_30 px_20 rs-contact-form">
      <div className="card-body pb-0">
        {formTitle !== '' && <div className="text-primary card-title">{formTitle}</div>}
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
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="name" value={formData?.name} type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>
              Email: <span className="text-danger">*</span>
            </label>
            {error && !formData?.email && <AlertBox type='danger' message={formMessage.emptyEmail} />}
            {error && formData?.email && !isValidEmail(formData.email) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
            <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>
              Phone:
            </label>
            <input maxLength="15" onChange={(e) => handleFieldChange(e)} name="phone" value={formData?.phone} type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label>
              Message: <span className="text-danger">*</span>
            </label>
            {error && !formData?.message && <AlertBox type='danger' message={formMessage.emptyMessage} />}
            <textarea maxLength="500" rows={5} onChange={(e) => handleFieldChange(e)} placeholder="Message" value={formData?.message} name="message" className="form-control"></textarea>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <button onClick={() => resetForm()} className="btn btn-outline-primary me-2 btnui2" type="button" name="reset" value="Reset">Reset</button>
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Submit" />
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
