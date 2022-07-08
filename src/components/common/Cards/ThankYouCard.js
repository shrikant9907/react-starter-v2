import React from 'react'
import { Link } from 'react-router-dom'
import { CaretLeftIcon, CheckCircleIcon } from '../../../_assets/icons/Icons'

const ThankYouCard = (props) => {

  const title = props.title ? props.title : 'Thank You';
  const message1 = props.message1 ? props.message1 : 'Your details has been sent successfully.';
  const message2 = props.message2 ? props.message2 : 'Our team will contact you shortly!';
  const buttonLabel = props.buttonLabel ? props.buttonLabel : 'Back to Site';

  return (
    <div class="card cui2c noshadow thankyou-card">
      <div class="card-body">
        <div class="cardicon mt_20 text_success">
          <i class="display-1 mb_30"><CheckCircleIcon /></i>
        </div>
        <div class="text_bold f40 mb_20 text-dark">{title}</div>
        <div class="mb_20 thankyou-message f16">
          <p class="mb_10">{message1}</p>
          <p class="text-itelic">{message2}</p>
        </div>
        <Link to="/" class="btn btn-primary btnui3 mb_20 w_200"><i class="mr_10 f16"><CaretLeftIcon /></i> {buttonLabel}</Link>
      </div>
    </div>
  )
}

export default ThankYouCard