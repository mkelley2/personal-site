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
          <h3>Welcome to my portfolio</h3>
          <Button
            text="Check out my work"
            name="projects"
            handleClick={handleClick}/>
          <Button
            text="How to contact"
            name="contact"
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