import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class AboutScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    return  (
      <div className="aboutContainer">
        <img className="nav-back" onClick={this._handleClick.bind(this)} src={require("../../images/left-arrow.png")} alt="back"></img>
        <h2>About Me</h2>
      </div>
    )
  }

  _handleClick() {
    this.props.history.goBack();
  }
}

AboutScreen.propTypes = {

};

export default AboutScreen;