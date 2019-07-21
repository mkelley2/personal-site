import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';
import { isMobile } from "react-device-detect";

import { SocialLinks } from "../../components";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { handleClick } = this.props;

    return  (
      <div className="navContainer">
        { !isMobile && <SocialLinks mode="light" /> }
        <div className={ `navLinks ${ isMobile ? 'mobile': ''}` }>
          <span name="projectSection" onClick={handleClick}>My Work</span>
          <span name="contactSection" onClick={handleClick}>Contact</span>
          <span name="resume" onClick={handleClick}>Resume</span>
        </div>
      </div>
    )
  }

}

Navbar.propTypes = {
  handleClick: PropTypes.func
};

export default Navbar;