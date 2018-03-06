import React from 'react'
import {Button, Form} from 'semantic-ui-react'

class NewEventForm extends React.Component {
  state = {
      name: "",
      description: "",
      startTime: "",
      endTime: "",
      timeZone: "America/New_York",
      currencyEventbrite:"",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newEvent = this.state

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} class="form">
          <Form.Field>
            <label class="form-label">Name</label>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label class="form-label">Description</label>
            <input
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <div class="form-flex">
            <Form.Field class="date-inputs">
              <label class="form-label">Start Time</label>
              <input
                id="datetime"
                type="datetime-local"
                placeholder="Date"
                name="startDate"
                value={this.state.startTime}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label class="form-label">End Time</label>
              <input
                id="datetime"
                type="datetime-local"
                placeholder="Date"
                name="endDate"
                value={this.state.end_date}
                onChange={this.handleChange}
              />
            </Form.Field>
          </div>
          <Form.Field>
            <label class="form-label">Location</label>
            <input
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewEventForm
