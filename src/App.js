import React, { Component } from 'react';
import classnames from 'classnames';
import './css/App.css';
// eslint-disable-next-line
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className={classnames('App', 'container-fluid')}>
        <div className={classnames('page-header', 'text-center')}>
          <h3>OpenWeb assignment</h3>
          <h4 className={classnames('text-info')}>
            An overview of the employees that work at Open Web.
          </h4>
        </div>
        <div className={classnames('content')}>
          <table className="table"></table>
        </div>
      </div>
    );
  }
}

export default App;
