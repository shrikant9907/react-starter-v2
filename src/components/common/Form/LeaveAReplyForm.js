import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '../../../_assets/icons/Icons';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';
import Checkbox from './CheckBox/CheckBox';

export default function LeaveAReplyForm(props) {

  let formTitle = 'Leave A Reply';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    name: '',
    email: '',
    website: '',
    comment: ''
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const formMessage = {
    emptyName: "Name is a required.",
    emptyEmail: "Email is a required.",
    invalidEmail: "Invalid email address.",
    emptyComment: "Comment is a required.",
    formSuccess: "Your comment has been submitted.",
  }

  const submitComment = () => {
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

    if (!formData.name || !formData.email || !formData.comment) {
      setError(true);
      return
    }

    if (formData.email) {
      if (!isValidEmail(formData.email)) {
        setError(true);
        return
      }
    }

    submitComment();

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
              Comment: <span className="text-danger">*</span>
            </label>
            {error && !formData?.comment && <AlertBox type='danger' message={formMessage.emptyComment} />}
            <textarea maxLength="500" rows={5} onChange={(e) => handleFieldChange(e)} placeholder="Add Comment" value={formData?.comment} name="comment" className="form-control"></textarea>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>
                  Name: <span className="text-danger">*</span>
                </label>
                {error && !formData?.name && <AlertBox type='danger' message={formMessage.emptyName} />}
                <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="name" value={formData?.name} type="text" className="form-control" placeholder="Enter your name." />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>
                  Email: <span className="text-danger">*</span>
                </label>
                {error && !formData?.email && <AlertBox type='danger' message={formMessage.emptyEmail} />}
                {error && formData?.email && !isValidEmail(formData.email) && <AlertBox type='danger' message={formMessage.invalidEmail} />}
                <input maxLength="50" onChange={(e) => handleFieldChange(e)} name="email" value={formData?.email} type="email" className="form-control" placeholder="Enter your email." />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>
                  Website:
                </label>
                <input maxLength="100" onChange={(e) => handleFieldChange(e)} name="website" value={formData?.website} type="text" className="form-control" placeholder="Enter your website url." />
              </div>
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Submit" />
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
