import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

import { Splash } from '../../components';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    return  (
      <div className="splashScreenContainer">
        <Splash handleClick={this._navigate.bind(this)} />
      </div>
    )
  }

  _navigate(name) {
    let contact = (name === "contactSection");

    this.props.history.push(`/main`, { scrollToContactOnLoad: contact });
  }
}

SplashScreen.propTypes = {

};

export default SplashScreen;