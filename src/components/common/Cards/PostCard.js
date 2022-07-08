import React from "react";
import Image from '../Image/Image';
import { Link } from "react-router-dom";
import { AngleDoubleRightIcon, CalanderIcon, UserIcon } from "../../../_assets/icons/Icons";

const PostCard = (props) => {

  let cData = props.data;
  let cardClasses = 'card cui2 r_0 mb_20';

  if (cData) {
    if (cData.classes && cData.classes !== '') {
      cardClasses = cData.classes;
    }
  }

  return (
    <React.Fragment>
      <div className={cardClasses}>
        <div className="mx-auto text-center">
          {cData?.imgSrc && <Link to={`/blog/${cData.id}`} className="d-inline-block"><Image src={cData?.imgSrc} alt={cData?.imgAlt} classes="card-img-top r_0" /></Link>}
          <div className="card-icon position-absolute">
            <i className="fas fa-quote-left"></i>
          </div>
        </div>
        <div className="card-body pri_30 pli_30 pbi_30">
          <div className="f22 mb_10 text-primary">{cData?.title}</div>
          {(cData.author || cData.date) &&
            <div className="text-muted px_5 py_5 mb_10 f14 d-flex justify-content-between">
              {cData.author && <span><UserIcon /> {cData?.author}</span>}
              {cData.date && <span><CalanderIcon /> {cData?.date}</span>}
            </div>
          }
          <div className="card-text mb_20">{cData?.text}</div>
          <Link className="btn btn-primary btnui1 text-white" to={`/blog/${cData.id}`}>{cData.btnLabel ? cData.btnLabel : 'Read More'} <AngleDoubleRightIcon /></Link>
        </div>
      </div>
    </React.Fragment>
  );

}
export default PostCard;