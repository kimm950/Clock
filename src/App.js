import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.Change(), 1000)
  }

  componentWillMount() {
    clearInterval()
  }

  render() {
    const { date } = this.state
    return (
      <div>
        {date.getHours()}
      </div>
    );
  }
}

export default Clock