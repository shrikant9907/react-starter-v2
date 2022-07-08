import React, { useState } from 'react';
import AlertBox from '../Alert/AlertBox';
import JSONDebug from '../JSONDebug';
import { toast } from 'react-toastify';

export default function OTPVerificationForm(props) {

  let formTitle = 'OTP Verfication';
  if (props.title) {
    formTitle = props.title;
  }

  const initFormData = {
    otpCode: '',
  }

  const [formData, setFormData] = useState(initFormData);
  const [error, setError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const formMessage = {
    emptyName: "OTP is a required field.",
    formSuccess: "OTP Submitted.",
  }

  const sendOTPCheckRequest = () => {
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

  const handleFieldChange = (e) => {
    const value = e.target.value.replace(/\D/g,'');
    setFormData({ ...formData, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (formData === null) {
      setError(true);
      return
    }

    if (!formData.otpCode) {
      setError(true);
      return
    }
 
    sendOTPCheckRequest();

  };

  const resetOTPCode = () => {
    toast.success('OTP sent again.')
  }

  return (

    <div className="card cui2 py_30 px_20 rs-contact-form">
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
              A code has been sent to your registered email.
            </label>
            {error && !formData?.otpCode && <AlertBox type='danger' message={formMessage.emptyName} />}
            <input maxLength="4" onChange={(e) => handleFieldChange(e)} name="otpCode" value={formData?.otpCode} type="text" className="form-control" placeholder="One Time Password" />
          </div>
          <div className="form-group d-flex align-items-center justify-content-center">
            <input disabled={(formData.otpCode.length !== 4) ? true : false} className="btn btn-primary btnui2" type="submit" name="submit" value="Submit OTP" />
          </div>
          <div className="mb_20 d-flex align-items-center justify-content-center">
            <span onClick={() => resetOTPCode()} className='text-primary c_p'>Resend OTP</span>
          </div>
          {submitStatus && <AlertBox type='success' message={formMessage.formSuccess} />}
        </form>
      </div>
      <JSONDebug data={formData} />
    </div>

  )
}
