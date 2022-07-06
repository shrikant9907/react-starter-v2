import React from "react";
import { toast } from "react-toastify";

const Button = (props) => {
  const btnClasses = props.classes ? props.classes : 'btn btn-primary btnui1';

  const handleButtonClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    } else {
      toast.info('Default button click.');
    }
  }

  return (
    <React.Fragment>
      <button
        type={props.btnTypes ? props.btnTypes : 'button'}
        className={btnClasses}
        onClick={(e) => handleButtonClick(e)}
        {...props}
      >
        {props.label}
      </button>
    </React.Fragment>
  )
}

export default Button;
