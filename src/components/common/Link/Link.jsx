import React from "react";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const CustomLink = (props) => {
  const btnClasses = props.classes ? props.classes : 'btn btn-primary btnui1';

  const handleLinkClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    } else {
      toast.info('Default Link click.');
    }
  }

  return (
    <React.Fragment>
      <Link
        to={props?.to}
        className={btnClasses}
        onClick={(e) => handleLinkClick(e)}
        {...props}
      >
        {props.label}
      </Link>
    </React.Fragment>
  )
}

export default CustomLink;
