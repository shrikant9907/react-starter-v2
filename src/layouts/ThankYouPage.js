import React from 'react'
import ThankYouCard from '../components/common/Cards/ThankYouCard'

const ThankYouPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <ThankYouCard
          title = 'Thank You'
          message1 = 'Your form has been submitted successfully.'
          message2 = 'We will contact you shortly.'
          buttonLabel ='Go back'
        />
      </div>
    </React.Fragment>
  )
}

export default ThankYouPage