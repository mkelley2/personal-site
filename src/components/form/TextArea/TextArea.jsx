import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class TextArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    let { placeholder, value, onChange, name } = this.props;
    return  (
      <div className="textAreaContainer">
        <textarea name={ name } placeholder={ placeholder } value={ value } onChange={ onChange } />
      </div>
    )
  }
}

TextArea.defaultProps = {
  type: "text"
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;