import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class ProjectScreenShotMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { screenshots , demos} = this.props,
      shots = [],
      demoLinks= [];

    screenshots.forEach((screenshot, i) => {
      shots.push(
        <img key={i} src={require(`../../../assets/${screenshot}`)} alt=""></img>
      );
    });

    demos.forEach((demo, i) => {
      demoLinks.push(
        <span key={i} className="highlight" onClick={this._handleClick.bind(this, demo)}>Live Demo</span>
        );
    });

    return  (
      <div className="projectScreenShotMobileContainer">
        <div className="screenShotWrapper">
          { shots }
        </div>
        <div className="demosWrapper">
          { demoLinks }
        </div>
      </div>
    )
  }

  _handleClick(link, e) {
    window.open(link, "_blank");
}
}

ProjectScreenShotMobile.propTypes = {
  screenshots: PropTypes.array,
  demos: PropTypes.array
};

export default ProjectScreenShotMobile;