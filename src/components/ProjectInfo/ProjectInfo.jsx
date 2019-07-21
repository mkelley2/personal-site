import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let {logo, body, demos } = this.props,
      demoLinks = [];

    demos.forEach((demo, i) => {
      demoLinks.push(
        <span key={i} className="highlight" onClick={this._handleClick.bind(this, demo)}>Live Demo</span>
      );
    });

    return  (
      <div className="projectInfoContainer">
        <img src={require(`../../assets/${ logo }`)} alt=""/>
        <p>{ body }</p>
        <div className="demoLinks">
          { demoLinks }
        </div>
      </div>
    )
  }

  _handleClick(link, e) {
      window.open(link, "_blank");
  }
}

ProjectInfo.propTypes = {
  logo: PropTypes.string,
  body: PropTypes.string,
  demos: PropTypes.array
};

export default ProjectInfo;