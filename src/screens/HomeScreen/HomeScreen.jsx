import React from "react";
// import PropTypes from 'prop-types';
import './styles.scss';

import { Splash }  from '../../components';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  render () {
    return  (
      <React.Fragment>
        <Splash handleClick={this._navigate.bind(this)} />
      </React.Fragment>
    )
  }

  _navigate(e) {
      this.props.history.push(`/${e.target.name}`);
  }
}

HomeScreen.propTypes = {

};

export default HomeScreen;