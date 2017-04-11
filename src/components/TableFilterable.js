import React, { Component } from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import '../css/components/TableFilterable.css';

class TableFilterable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: null
    }
  }

  render() {
    let { employees } = this.props.data;

    let columns = (
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Bio</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Skills</Table.HeaderCell>
      </Table.Row>
    );

    let checkboxes = [];

    let rows = employees.map((obj, i) => {
      let { name, bio, profileImage, role, skills } = obj;

      skills.forEach(skill => {
        if (!checkboxes.includes(skill)) {
          checkboxes.push(skill);
        }
      });

      return (
        <Table.Row key={i}>
          <Table.Cell>
            <div className="userImage img-circle img-responsive center-block"
              style={{background: `url(${profileImage})`}}
            />
          </Table.Cell>
          <Table.Cell>{ name }</Table.Cell>
          <Table.Cell>{ bio }</Table.Cell>
          <Table.Cell>{ role }</Table.Cell>
          <Table.Cell>{ skills.join(', ') }</Table.Cell>
        </Table.Row>
      );
    });

    let filters = (
      <div className="center-block text-center">
        { checkboxes.map((c, i) => <Checkbox label={c} key={i} />)}
      </div>
    );

    return (
      <Table className='TableFilterable'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>{ filters }</Table.HeaderCell>
          </Table.Row>
          { columns }
        </Table.Header>
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    );
  }
}

export default TableFilterable;