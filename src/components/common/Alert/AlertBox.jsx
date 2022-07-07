import React from 'react'
import { toast } from 'react-toastify';

export default function AlertBox(props) {

  let alertClasses = 'alert alertui1 dismissible fade show ';

  if (props.type && props.type !== '') {
    alertClasses += `alert-${props.type}`;
  } else {
    alertClasses += `alert-success`;
  }

  const handleAlertClose = () => {
    if (props.onClick) {
      props.onClick()
    } else {
      toast.info("Close method not given.")
    }
  }
 
  return (
    <div className={alertClasses}>
      {props.message ? props.message : ''}
      {props.dismissible && <button type="button" onClick={() => handleAlertClose()} className="close btn-close"></button>}
    </div>    
  )
}



 
