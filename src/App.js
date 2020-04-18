import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const ClockContainer = styled.div`
  div {
    margin: 20px;
  }
`

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
      <ClockContainer>
        <div className="month-date">
          {date.getMonth() + 1} . {date.getDate()} . {date.getFullYear()}
        </div>
        <div className="time">
          {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} : {date.getMilliseconds()}
        </div>
      </ClockContainer>
    );
  }
}

export default Clock