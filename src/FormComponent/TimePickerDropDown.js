import React from 'react'

class TimePicker extends React.Component {

  render() {
    let options = []
    for(let i = 0; i < this.props.amount; i++) options.push(<option value={i + 1} >{i+1}</option>)
    return (
      <select name="time">
        {options.map(item => item)}
      </select>
    )
  }
}

export default TimePicker
