import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

import { Logo } from '../../components';

import { socialLinks } from '../../constants/social'

class ContactScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let social = [];

    socialLinks.forEach((elem, i) => {
      social.push(
        <Logo
          key={i}
          title={ elem.name }
          src={ elem.logo }
          link={ elem.link }
        />
          );
    });
    return  (
      <div className="aboutContainer">
        <img className="nav-back" onClick={this._handleClick.bind(this)} src={require("../../images/left-arrow.png")} alt="back"></img>
        <h2>Contact Info and Git Links</h2>
        <div className="links">
          { social }
        </div>
        <div className="info">
          <ul>
            <li><span className="highlight">Name:</span> Matthew Kelley</li>
            <li><span className="highlight">Email:</span> mkelley1412@gmail.com</li>
            <li><span className="highlight">Phone:</span> 503-709-2311</li>
          </ul>
        </div>
      </div>
    )
  }

  _handleClick() {
    this.props.history.goBack();
  }
}

ContactScreen.propTypes = {

};

export default ContactScreen;