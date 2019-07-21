import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () { 
    return  ( 
      <div> Blank component!</div>
    )
  }
}

Blank.propTypes = {

};
 
export default Blank;