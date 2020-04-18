import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.Run(), 10)
  }

  componentWillMount() {
    clearInterval(this.timeID)
  }

  Run = () => {
    this.setState({ date: new Date() })
  }

  render() {
    const { date } = this.state
    return (
      <Clock>
        {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} : {date.getMilliseconds()}
      </Clock>
    );
  }
}

export default Clock