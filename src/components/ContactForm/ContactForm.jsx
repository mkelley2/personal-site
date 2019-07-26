import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

import {Input, Button, TextArea} from "../../components";

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
    this.handleSubmit = this._handleSubmit.bind(this);
    this.handleInputChange = this._handleInputChange.bind(this);
  }
  render () {
    return  (
      <div className="contactFormContainer">
        <h2>Want to work <span className="highlight">together</span>?</h2>
        <form className="formWrapper" method="POST" action="https://formspree.io/mkelley1412@gmail.com">
          <Input
            required={ true }
            placeholder="Name"
            type="text"
            value={ this.state.form.name }
            name="name"
            onChange={this.handleInputChange} />
          <Input
            required={ true }
            placeholder="Email"
            type="email"
            value={ this.state.form.email }
            name="email"
            onChange={ this.handleInputChange } />
          <TextArea
            placeholder="Message"
            name="message"
            value={ this.state.form.message }
            onChange={ this.handleInputChange } />
          <Button
            text="Submit"
            handleClick={this.handleSubmit}
            name="submit" />
        </form>
      </div>
    )
  }

  _handleInputChange(e) {
    let newState = this.state.form;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  _handleSubmit(e) {
    console.log(arguments);
  }
}

ContactForm.propTypes = {

};

export default ContactForm;