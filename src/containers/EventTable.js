import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EventTableRow from '../components/EventTableRow'

const EventTable = ({events}) => {

  const mappedEvents = events.map(event => <EventTableRow event={event}/> )

  return (
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Event Price</Table.HeaderCell>
        <Table.HeaderCell>Start Time</Table.HeaderCell>
        <Table.HeaderCell>End Time</Table.HeaderCell>
        <Table.HeaderCell>Eventbrite URL</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {mappedEvents}
    </Table.Body>
  </Table>
  )
}

export default EventTable
