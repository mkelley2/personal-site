import React from "react";
import { Switch, Route, withRouter } from 'react-router';

import { HomeScreen, ProjectScreen, AboutScreen } from './screens';

// const PrivateRoute = ({
//   component: Component,
//   auth: auth,
//   path: path }) => {
//   return auth ? (
//     <Route path={path} component={Component} />
//   ) : (
//    <Redirect to='/login' />
//   )
// }

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/projects" component={ProjectScreen}/>
        <Route exact path="/about" component={AboutScreen}/>
      </Switch>
    )
  }
}

export default withRouter(Routes);