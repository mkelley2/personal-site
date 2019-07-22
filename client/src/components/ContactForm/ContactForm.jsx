import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';
import axios from "axios";
import ReactLoading from 'react-loading';

import {Input, Button, TextArea} from "../../components";

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        email: "",
        message: ""
      },
      loading: false,
      formSubmitted: false
    };
    this.handleSubmit = this._handleSubmit.bind(this);
    this.handleInputChange = this._handleInputChange.bind(this);
  }
  render () {
    const form = (
        <div className="formWrapper">
          <Input
            placeholder="Name"
            type="text"
            value={ this.state.form.name }
            name="name"
            onChange={this.handleInputChange} />
          <Input
            placeholder="Email"
            type="text"
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
        </div>
    );

    const submitted = (
      <div className="submitted">
        <h1>Thank you for reaching out. I will reply as soon as I can.</h1>
      </div>
    );

    return  (
      <div className="contactFormContainer">
        <h2>Want to work <span className="highlight">together</span>?</h2>
        { !this.state.formSubmitted && form }
        { this.state.loading && <ReactLoading className="loading" type="spin" color="#E3990F"/>}
        { this.state.formSubmitted && !this.state.loading && submitted }
      </div>
    )
  }

  _handleInputChange(e) {
    let newState = this.state.form;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  async _handleSubmit() {
    let { name, email, message } = this.state;
    this.setState({ loading: true , formSubmitted: true });

    await axios.post('/api/form', {
      name,
      email,
      message
    }).then((response) => {
      console.log("Response", response);
      this.setState({ loading: false , formSubmitted: true});
    }).catch((err) => {
      console.log("Error ", err);
    });
  }
}

ContactForm.propTypes = {

};

export default ContactForm;