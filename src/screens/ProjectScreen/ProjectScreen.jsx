import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';
import { Project } from "../../components";

class ProjectScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: "cloudengage"
    };
  }
  render () {
    let { project } = this.state;
    return  (
      <div className="projectsContainer">
        <h2>Development Work Experience</h2>
        <div className="projectNav">
          <a onClick={this._changeProject.bind(this, "cloudengage")} href="cloudengage">CloudEngage</a>
          <a onClick={this._changeProject.bind(this, "delane")} href="delane">Delane Studios</a>
        </div>
        <Project
          project={project} />
      </div>
    )
  }

  _changeProject(project, e) {
    e.preventDefault();
    this.setState({project: project});
  }
}

ProjectScreen.propTypes = {

};

export default ProjectScreen;