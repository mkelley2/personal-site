import React from "react";
import PropTypes from 'prop-types';
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

  _navigate(e) {
    let contact = e.target.name === "contact" ? "?contact" : "";
    this.props.history.push(`/main${contact}`);
  }
}

SplashScreen.propTypes = {

};

export default SplashScreen;