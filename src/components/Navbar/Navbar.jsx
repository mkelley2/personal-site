import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

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
        <SocialLinks />
        <ul className="navLinks">
          <li onClick={this._handleNavClick.bind(this,"projects")}>My Work</li>
          <li onClick={this._handleNavClick.bind(this,"contact")}>Contact</li>
          <li onClick={this._handleNavClick.bind(this,"resume")}>Resume</li>
        </ul>
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