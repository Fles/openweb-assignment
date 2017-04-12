import React, { Component } from 'react';
import TableFilterable from './components/TableFilterable';
import { Checkbox } from 'semantic-ui-react';
import classnames from 'classnames';
import $ from "jquery";
import './css/App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      employees: null,
      filters: [],
      selected: [],
    }
  }

  render () {
    return (
      <div className={classnames('App', 'container-fluid')}>
        <div className={classnames('page-header', 'text-center')}>
          <h3>OpenWeb assignment</h3>
          <h4 className={classnames('text-info')}>
            An overview of the employees that work at Open Web.
          </h4>
        </div>
        <div className={classnames('content', 'container')}>
          { this.getFilters() }
          <div className={classnames('table-responsive')}>
            { this.getEmployeesTable() }
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    $.ajax({
      url: 'https://sys4.open-web.nl/employees.json',
      crossOrigin: true,
      success: response => {
        let filters = [], selected = [];
        this.setState({employees: response.employees});

        response.employees.forEach(obj => {
          obj.skills.forEach(skill => {
            if (!filters.includes(skill)) {
              filters.push(skill);
              selected.push(skill);
            }
          });
        });
        this.setState({filters, selected});
      },
    });
  }

  getFilters () {
    let { filters } = this.state;

    let handleClick = (e, data) => {
      let { label, checked } = data;
      let { selected } = this.state;

      if (!checked) {
        if (!selected.includes(label)) selected.push(label);
      } else {
        let index = selected.indexOf(label);
        if (index > -1) selected.splice(index, 1);
      }
      this.setState({selected});
    };

    return (
      <div className="filters center-block text-center">
        { filters.map((c, i) => <Checkbox label={c} key={i} onClick={handleClick} defaultChecked />) }
      </div>
    );
  }

  getEmployeesTable () {
    if (this.state.employees == null) return null;

    let columns = [
      { title: "", width: "two" },
      { title: "Name", width: "two" },
      { title: "Bio", width: "eight" },
      { title: "Role", width: "two" },
      { title: "Skills", width: "two" },
    ];

    return (
      <TableFilterable
        data={ this.getEmployees() }
        columns={ columns }
      />
    );
  }

  getEmployees () {
    if (this.state.employees == null) return null;
    let { employees, selected } = this.state;

    let filtered_employees = employees.filter(obj => {
      let { skills } = obj;
      if (selected.length === 0 && skills.length === 0) return true;
      return !!selected.some(v => !!skills.includes(v));
    });

    return filtered_employees;
  }
}

export default App;
