import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';

export default function ContactForm(props) {

  let formTitle = 'Get In Touch';
  if (props.title) {
    formTitle = props.title;
  }

  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(false);

  const formMessage = {
    emptyName: "Name is a required field.",
    emptyEmail: "Email is a required field.",
    invalidEmail: "Invalid email address.",
    invalidPhone: "Invalid phone number.",
    emptyMessage: "Message is a required field.",
    formSuccess: "Message sent successfully. Thank you form contacting us.",
  }

  const sendMail = () => {
    clearForm();
  }

  const clearForm = () => {
    setFormData(null);
    setError(false);
  }

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  const isValidPhone = (phone) => {
    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.value.match(phone)
  }

  const handleFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('testse', formData)

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

    <div className="card cui2 py_30 px_20">
      <div className="card-body pb-0">
        {formTitle !== '' && <div className="card-title">{formTitle}</div>}
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
            <input maxlength="50" onChange={(e) => handleFieldChange(e)} name="name" value={formData?.name} type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>
              Email: <span className="text-danger">*</span>
            </label>
            {error && !formData?.email && <AlertBox type='danger' message={formMessage.emptyEmail} />}
            {error && formData?.email && !isValidEmail(formData.email) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
            <input maxlength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>
              Phone:
            </label>
            <input maxlength="15" onChange={(e) => handleFieldChange(e)} name="phone" value={formData?.phone} type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label>
              Message: <span className="text-danger">*</span>
            </label>
            {error && !formData?.message && <AlertBox type='danger' message={formMessage.emptyMessage} />}
            <textarea maxlength="500" rows={5} onChange={(e) => handleFieldChange(e)} placeholder="Message" value={formData?.message} name="message" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>

  )
}