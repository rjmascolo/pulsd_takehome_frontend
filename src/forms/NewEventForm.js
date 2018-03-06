import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import TimePicker from '../FormComponent/TimePickerDropDown'


class NewEventForm extends React.Component {
  state = {
      name: "",
      description: "",
      startDate: '' ,
      startTime:'12:00',
      endTime: "12:00",
      endDate: "",
      timeZone: "America/New_York",
      currencyEventbrite:"",
  }

  handleChange = (e) => {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newEvent = this.state
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Field>
            <label className="form-label">Name</label>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label className="form-label">Description</label>
            <input
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <div className="form-flex">
            <Form.Field>
              <label className="form-label">Start Time</label>
              <input
                type="date"
                placeholder="Date"
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
              />
              <input id="time" type="time"
                value={this.state.startTime}
                onChange={this.handleChange}
                name="startTime[time]"
              />
            </Form.Field>


            <Form.Field>
              <label className="form-label">End Time</label>
              <input
                type="date"
                placeholder="Date"
                name="endDate"
                value={this.state.endTime}
                onChange={this.handleChange}
              />
              <input id="time" type="time" name="" value={this.state.endTime}/>
            </Form.Field>
          </div>
          <Form.Field>
            <label className="form-label">Location</label>
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
