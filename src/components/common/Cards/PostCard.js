import React from "react";
import Image from '../Image/Image';
import { Link } from "react-router-dom";
import { AngleDoubleRightIcon, CalanderIcon, UserIcon } from "../../../_assets/icons/Icons";

const PostCard = (props) => {

  let cData = props.data;
  let cardClasses = 'card cui2 r_0 mb-3';

  if (cData) {
    if (cData.classes && cData.classes !== '') {
      cardClasses = cData.classes;
    }
  }

  return (
    <React.Fragment>
      <div className={cardClasses}>
        <div className="mx-auto text-center">
          {cData?.imgSrc && <Link to="/blog/blogId" className="d-inline-block"><Image src={cData?.imgSrc} alt={cData?.imgAlt} classes="card-img-top r_0" /></Link> }
          <div className="card-icon position-absolute">
            <i className="fas fa-quote-left"></i>
          </div>
        </div>
        <div className="card-body pri_30 pli_30 pbi_30">
          <div className="f22 mb_10 text-primary">{cData?.title}</div>
          <div className="text-muted px_5 py_5 mb_10 f14 d-flex justify-content-between"><span><UserIcon /> Shrikant</span> <span><CalanderIcon /> 1 Dec 2020</span></div>
          <div className="card-text mb_20">{cData?.text}</div>
          <Link className="btn btn-primary btnui1 w-100 text-white" to="/blog/blogId">Read More <AngleDoubleRightIcon /></Link>
        </div>
      </div>
    </React.Fragment>
  );

}
export default PostCard;