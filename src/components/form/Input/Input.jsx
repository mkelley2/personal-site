import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { placeholder, type, value, onChange, name, required } = this.props;
    return  (
      <div className="inputContainer">
        <input name={ name } placeholder={ placeholder } type={ type } value={ value } onChange={ onChange } required={ required } />
      </div>
    )
  }
}

Input.defaultProps = {
  type: "text",
  required: false
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default Input;