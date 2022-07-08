import React from 'react'
import ContactDetailsCard from '../components/common/Cards/ContactDetailsCard/ContactDetailsCard'
import ContactForm from '../components/common/Form/ContactForm'

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className='text-center py_20'>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates distinctio blanditiis eligendi provident reiciendis ullam esse laboriosam, expedita nobis illo deserunt autem alias ipsum exercitationem ducimus rem nulla officiis.</p>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6">
            <ContactDetailsCard data={{
              heading1: "Contact Details",
              address: 'Lorem, ipsum dolor sit amet consectetura orem, ipsum dolor sit amet consecteturae!',
              contact: '+91 1234567890, +91 1234567890',
              email: "example@email.com",
              heading2: "",
              openingHours: [],
              hideBottomHr: true
            }} />
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactPage