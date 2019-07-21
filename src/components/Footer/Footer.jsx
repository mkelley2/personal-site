import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

import { SocialLinks } from "../../components";

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    return  (
      <div className="footerContainer">
        <div className="info">
          <span><span className="highlight">Phone:</span>503-709-2311</span>
          <span><span className="highlight">Email:</span>mkelley1412@gmail.com</span>
        </div>
        <SocialLinks mode="dark"/>
      </div>
    )
  }
}

Footer.propTypes = {

};

export default Footer;