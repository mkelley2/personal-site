import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

import { Logo } from "../../components";

import { socialLinks } from "../../constants/social";

class SocialLinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { mode } = this.props,
      logoCollection = [];

    socialLinks.forEach((socialLink, i) => {
      logoCollection.push(
      <Logo
        key={i}
        src={socialLink.logo[mode]}
        link={socialLink.link}
      />
      );
    });
    return  (
      <div className="socialLinkContainer">
        { logoCollection }
      </div>
    )
  }
}

SocialLinks.defaultProps = {
  mode: "light"
}

SocialLinks.propTypes = {
  mode: PropTypes.string
};

export default SocialLinks;