import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class ProjectScreenShot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { screenshots } = this.props,
      shots = [];

      screenshots.forEach((screenshot, i) => {
        shots.push(
          <img key={i} src={require(`../../assets/${screenshot}`)} alt=""></img>
        );
      });
    return  (
      <div className="projectScreenShotContainer">
       { shots }
      </div>
    )
  }
}

ProjectScreenShot.propTypes = {
  screenshots: PropTypes.array
};

export default ProjectScreenShot;