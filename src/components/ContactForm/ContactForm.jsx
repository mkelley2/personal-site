import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    return  (
      <div className="contactFormContainer">
        <h2>Want to work <span className="highlight">together</span>?</h2>
      </div>
    )
  }
}

ContactForm.propTypes = {

};

export default ContactForm;