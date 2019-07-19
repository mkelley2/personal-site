import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

import { projects } from '../../constants/projects';


class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { project } = this.props,
      currentProject = projects[project];

    let header = (
      !currentProject.companyUrl ?  <h3>{ currentProject.company }</h3> : <a href={currentProject.companyUrl} target="_blank" rel="noopener noreferrer"><h3>{ currentProject.company }</h3></a>
    );

    let stack = "";
    currentProject.stack.forEach((elem, i) => {
      if (i === 0) {
        stack = elem;
      } else {
        stack += ", " + elem;
      }
    });

    let screenshots = [];
    currentProject.screenshots.forEach((elem, i) => {
      screenshots.push(<img key={i} src={require(`../../images/${elem}`)} alt=""></img>);
    })

    return  (
      <div className="projectContainer">
        <div className="header">
          { header }
        </div>
        <p><span className="highlight">Title:</span> { currentProject.jobTitle }</p>
        <p><span className="highlight">Projects worked on:</span> { currentProject.projectTitle }</p>
        <p><span className="highlight">Technology Stack:</span> { stack }</p>
        <p><span className="highlight">Job Description:</span> { currentProject.description }</p>
        {screenshots.length > 0 && <h4><span className="highlight">Screenshots:</span></h4>}
        {screenshots.length > 0 && <div className="screenshots"> { screenshots } </div>}
      </div>
    )
  }
}

Project.propTypes = {
  project: PropTypes.string.isRequired
};

export default Project;