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
    let { src, title, link } = this.props;
    return  (
      <div onClick={this._handleClick.bind(this)} className={`logoContainer ${!!link ? "hasLink": ""}`}>
          <img src={ require(`../../images/logos/${src}`) } alt={ title }/>
          {title && <label>{ title }</label>}
      </div>
    )
  }

  _handleClick(e) {
    let { link } = this.props;
    if (link) {
      console.log("Dasd");
      window.open(link, "_blank");
    }
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Logo;