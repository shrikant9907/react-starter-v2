import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';

export default function ChangePasswordForm(props) {

  let formTitle = 'Change Password';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);

  const formMessage = {
    emptyCurrentPassword: "Current is a required field.",
    emptyPassword: "Password is a required field.",
    emptyConfirmPassword: "Confirm Password is a required field.",
    passwordNotMatched: "Password and Confirm password not match.",
    formSuccess: "Your account password has been updated successfully.",
  }

  const sendChangePasswordRequest = () => {

    resetForm()
  }

  const resetForm = () => {
    setError(false);
    setFormData(initFormData);
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

    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setError(true);
      return
    }


    if (formData.newPassword && formData.confirmPassword && (formData.newPassword !== formData.confirmPassword)) {
      setError(true);
      return
    }

    sendChangePasswordRequest();

  };

  return (

    <div className="card cui2 py_30 px_20 rs-change-password-form">
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
              Current Password: <span className="text-danger">*</span>
            </label>
            {error && !formData?.currentPassword && <AlertBox type='danger' message={formMessage.emptyCurrentPassword} />}
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="currentPassword" value={formData?.currentPassword} type="password" className="form-control" placeholder="Enter current password." />
          </div>
          <div className="form-group">
            <label>
              Password: <span className="text-danger">*</span>
            </label>
            {error && !formData?.newPassword && <AlertBox type='danger' message={formMessage.emptyPassword} />}
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="newPassword" value={formData?.password} type="password" className="form-control" placeholder="Enter new password." />
          </div>
          <div className="form-group">
            <label>
              Confirm Password: <span className="text-danger">*</span>
            </label>
            {error && !formData?.confirmPassword && <AlertBox type='danger' message={formMessage.emptyConfirmPassword} />}
            {error && formData?.newPassword && formData?.confirmPassword && !isPasswordMatched(formData.newPassword, formData.confirmPassword) && <AlertBox type='danger' message={formMessage.passwordNotMatched} />}
            <input autoComplete='off' maxLength="15" onChange={(e) => handleFieldChange(e)} name="confirmPassword" value={formData?.confirmPassword} type="password" className="form-control" placeholder="Repeat your password." />
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input className="btn btn-primary btnui2" type="submit" name="submit" value="Submit" />
          </div>
        </form>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
