import React from 'react';
import { Icon, Table, Image } from 'semantic-ui-react';

const TableStriped = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>Employees</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Bio</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Skills</Table.HeaderCell>
          <Table.HeaderCell>Profile image</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Icon name='user' color="green"/>
          </Table.Cell>
          <Table.Cell>Omar Ras</Table.Cell>
          <Table.Cell>Lorem ipsum dolor sit amet, consectetur.</Table.Cell>
          <Table.Cell>Scrum Master</Table.Cell>
          <Table.Cell>Scrum</Table.Cell>
          <Table.Cell>
            <Image
              src='http://lorempixel.com/30/30/people/'
              as='a' size='medium'
              href='http://google.com'
              target='_blank'
              className={'img-responsive'}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TableStriped;