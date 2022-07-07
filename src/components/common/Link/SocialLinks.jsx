import React from 'react'
import { Link } from 'react-router-dom'
import { CodepenIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../../_assets/icons/Icons'

export default function SocialLinks(props) {

  let socialIcons = props.icons;

  socialIcons = {
    fbLink: 'http://google.com'
  }

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    window.open(link); // Open new Tab
  }

  return (
    <React.Fragment>
    { socialIcons !== undefined && 
      <ul className="socialicons colored siconsc">

        { socialIcons.fbLink !== undefined && socialIcons.fbLink !== '' &&
          <li className="facebook">
            <Link to={socialIcons.fbLink} onClick={(e) => handleLinkClick(e, socialIcons.fbLink)} title="Facebook"><FacebookIcon /></Link>
          </li>
        }

        { socialIcons.twLink !== undefined && socialIcons.twLink !== '' &&
          <li className="twitter">
            <Link to={socialIcons.twLink} onClick={(e) => handleLinkClick(e, socialIcons.twLink)} title="Twitter"><TwitterIcon /></Link>
          </li>
        }

        { socialIcons.igLink !== undefined && socialIcons.igLink !== '' &&
          <li className="instagram">
            <Link to={socialIcons.igLink} onClick={(e) => handleLinkClick(e, socialIcons.igLink)} title="Instagram"><InstagramIcon /></Link>
          </li>
        }

        { socialIcons.ytLink !== undefined && socialIcons.ytLink !== '' &&
          <li className="youtube">
            <Link to={socialIcons.ytLink} onClick={(e) => handleLinkClick(e, socialIcons.ytLink)} title="Youtube"><YoutubeIcon /></Link>
          </li>
        }

        { socialIcons.cpLink !== undefined && socialIcons.cpLink !== '' &&
          <li className="codepen">
            <Link to={socialIcons.cpLink} onClick={(e) => handleLinkClick(e, socialIcons.cpLink)} title="Code Pen"><CodepenIcon /></Link>
          </li>
        }

        { socialIcons.ghLink !== undefined && socialIcons.ghLink !== '' &&
          <li className="github">
            <Link to={socialIcons.ghLink} onClick={(e) => handleLinkClick(e, socialIcons.ghLink)} title="Github"><GithubIcon /></Link>
          </li>
        }

      </ul>
    }
    </React.Fragment>
  )
}
