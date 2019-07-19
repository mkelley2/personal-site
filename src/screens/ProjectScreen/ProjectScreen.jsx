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
        <img className="nav-back" onClick={this._handleClick.bind(this)} src={require("../../images/left-arrow.png")} alt="back"></img>
        <h2>Development Work Experience</h2>
        <div className="projectNav">
          <a onClick={this._changeProject.bind(this, "cloudengage")} href="cloudengage"><img className="company-logo" alt="CloudEngage" src={require("../../images/cloudengage/cloudengage.webp")}></img></a>
          <a onClick={this._changeProject.bind(this, "delane")} href="delane"><img className="company-logo" alt="CloudEngage" src={require("../../images/delane/delane.png")}></img></a>
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

  _handleClick() {
    this.props.history.goBack();
  }
}

ProjectScreen.propTypes = {

};

export default ProjectScreen;