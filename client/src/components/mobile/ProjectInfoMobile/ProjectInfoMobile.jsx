import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class ProjectInfoMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { logo, body, demos, stack } = this.props,
      demoLinks = [],
      bodyText = [],
      stackText = stack.join(", ");

      body.forEach((demo, i) => {
        bodyText.push(<p key={i}>{ demo }</p>)
      });

      demos.forEach((demo, i) => {
        demoLinks.push(
          <span key={i} className="highlight" onClick={this._handleClick.bind(this, demo)}>Live Demo</span>
          );
        });

    return  (
      <div className="projectInfoMobileContainer">
        <img src={require(`../../../assets/${ logo }`)} alt=""/>
        { bodyText }
        <p>Stack used: { stackText }</p>
      </div>
    )
  }

  _handleClick(link, e) {
    window.open(link, "_blank");
  }
}

ProjectInfoMobile.propTypes = {
  logo: PropTypes.string,
  body: PropTypes.array,
  stack: PropTypes.array
};

export default ProjectInfoMobile;