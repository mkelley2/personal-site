import React from 'react';
import { withRouter } from 'react-router'
import Routes from './Routes';

import './styles/main.scss';

function App() {
  return (
    <div className="appContainer">
      <Routes />
    </div>
  );
}

export default withRouter(App);

const serverDataCache = {
  serverRunning: false
};
export { serverDataCache };
