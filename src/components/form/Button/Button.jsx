import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { text, handleClick, name } = this.props;

    return  (
      <React.Fragment>
        <button name={ name } onClick={ () => handleClick(name) }>{ text }</button>
      </React.Fragment>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;