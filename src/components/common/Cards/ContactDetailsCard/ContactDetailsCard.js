import React from 'react'
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '../../../../_assets/icons/Icons';

const ContactDetailsCard = (props) => {

  const { heading1, address, contact, email, heading2, openingHours, hideBottomHr } = props.data;

  return (

    <div className="card cui2 py_20 px_20">
      <div className="card-body">
        <div className="card-title mbi_5">
        {heading1 !== '' && <span className="text_normal">{heading1}</span>}
        </div>
        <ul className="listing licons">
          {address !== '' && <li className="list-item">
            <i className="text-primary f24"><MapPinIcon /></i>
            {address}
          </li>
          }
          {contact !== '' && <li className="list-item">
            <i className="text-primary f18"><PhoneIcon /></i>
            {contact}
          </li>
          }
          {email !== '' && <li className="list-item">
            <i className="text-primary f18"><EnvelopeIcon /></i>
            {email}
          </li>
          }
        </ul>
        {!hideBottomHr && <hr /> }
        {heading2 !== '' && <div className="card-title mbi_5">
          <span className="text_normal">Business Hours</span>
        </div>
        }

        {openingHours.length > 0 &&
          <ul className="listing licons">
            {openingHours.map((item, idx) => {
              return <li key={idx} className="list-item d-flex justify-content-between">
                <span><i className="text-primary f20"><ClockIcon /></i>
                  {item?.title}</span>
                <span>{item?.desc}</span>
              </li>
            })}
          </ul>
        }
      </div>
    </div>

  )
}
export default ContactDetailsCard;