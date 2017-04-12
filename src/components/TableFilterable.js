import React, { Component, PropTypes } from 'react';
import { Table } from 'semantic-ui-react';
import '../css/components/TableFilterable.css';

const propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

class TableFilterable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: null
    }
  }

  render() {
    let { data } = this.props;
    let rows = data.map((obj, i) => {
      let { name, bio, profileImage, role, skills } = obj;
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

    let columns = this.props.columns.map((c, i) => {
      return <Table.HeaderCell key={i}>{c.title}</Table.HeaderCell>;
    });

    return (
      <Table className='TableFilterable'>
        <Table.Header>
          <Table.Row>
          { columns }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    );
  }
}

TableFilterable.propTypes = propTypes;
export default TableFilterable;