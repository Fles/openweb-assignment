import React, { Component } from 'react';
import classnames from 'classnames';
import './css/App.css';
import TableFilterable from './components/TableFilterable';
import $ from "jquery";
// eslint-disable-next-line
import { Navbar, Jumbotron } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null
    }
  }
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
          <div className={classnames('table-responsive')}>
            { this.getEmployeesTable() }
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $.ajax({
      url: 'https://sys4.open-web.nl/employees.json',
      success: response => this.setState({response}),
      crossOrigin: true,
    });
  }

  getEmployeesTable() {
    if (this.state.response == null) return null;
    return <TableFilterable data={this.state.response} />;
  }
}

export default App;
