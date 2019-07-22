import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

import { Button } from '../../components';

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { handleClick } = this.props;
    return  (
      <div className="splashWrapper">
        <div className="card">
          <h2>Hello, I'm <span className="highlight">Matthew Kelley</span></h2>
          <h3>I am a full stack developer passionate about technology</h3>
          <Button
            text="My work"
            name="projectSection"
            handleClick={handleClick}/>
          <Button
            text="Contact"
            name="contactSection"
            handleClick={handleClick}/>
        </div>
      </div>
    )
  }

}

Splash.propTypes = {
  handleClick: PropTypes.func
};

export default Splash;