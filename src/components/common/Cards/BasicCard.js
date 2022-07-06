import React from "react";
import Image from '../../images/Images';
import CustomLink from "../Link/Link";

const BasicCard = (props) => {

  let cData = props.data;
  let cardClasses = 'card cui3 mb-3';

  if (cData) {
    if (cData.classes && cData.classes !== '') {
      cardClasses = cData.classes;
    }
  }

  return (
    <React.Fragment>
      <div className={cardClasses}>
        <div className="mx-auto text-center">
          {cData?.imgSrc && <Image src={cData?.imgSrc} alt={cData?.imgAlt} classes="card-img-top r_0" /> }
          <div className="card-icon position-absolute">
            <i className="fas fa-quote-left"></i>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title fw-bold mb_20">{cData?.title}</div>
          <div className="card-text mb_20">{cData?.text}</div>
          <CustomLink label="Click me" to="/" />
        </div>
      </div>
    </React.Fragment>
  );

}
export default BasicCard;