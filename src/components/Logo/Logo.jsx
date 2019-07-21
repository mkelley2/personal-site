import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { src } = this.props;
    return  (
      <div onClick={ this._handleClick.bind(this) } className="logoContainer">
          <img src={ require(`../../assets/${ src }`) } alt=""/>
      </div>
    )
  }

  _handleClick(e) {
    let { link } = this.props;
    if (link) {
      window.open(link, "_blank");
    }
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Logo;