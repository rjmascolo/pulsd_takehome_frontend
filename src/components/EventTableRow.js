import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const EventTableRow = ({event}) => {

  return (

      <Table.Row>
        <Table.Cell>{event.name}</Table.Cell>
        <Table.Cell>{event.description}</Table.Cell>
        <Table.Cell>{event.address}</Table.Cell>
        <Table.Cell>{event.event_price}</Table.Cell>
        <Table.Cell>{event.start_date}</Table.Cell>
        <Table.Cell>{event.end_date}</Table.Cell>
        <Table.Cell>
          {event.eventbrite_url ? <a href={event.eventbrite_url} >Link</a>  : "Not Posted"}
        </Table.Cell>
      </Table.Row>
  )
}

export default EventTableRow
