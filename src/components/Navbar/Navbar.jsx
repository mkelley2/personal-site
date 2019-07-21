import React from "react";
// import PropTypes from 'prop-types';
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
    return  (
      <div className="navContainer">
        { !isMobile && <SocialLinks mode="light" /> }
        <div className={ `navLinks ${ isMobile ? 'mobile': ''}` }>
          <span onClick={this._handleNavClick.bind(this,"projects")}>My Work</span>
          <span onClick={this._handleNavClick.bind(this,"contact")}>Contact</span>
          <span onClick={this._handleNavClick.bind(this,"resume")}>Resume</span>
        </div>
      </div>
    )
  }

  _handleNavClick(destination) {
console.log(destination)
  }
}

Navbar.propTypes = {

};

export default Navbar;