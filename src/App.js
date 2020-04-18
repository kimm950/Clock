import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { getAllByTestId } from '@testing-library/react';

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  font-size: 50px;
  height: 800px;
  .month-date {
    display: inline-block;
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
          {date.getFullYear()} / {date.getMonth()} / {date.getDate()}
        </div>
        <div className="time">
          {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} : {date.getMilliseconds()}
        </div>
      </ClockContainer>
    );
  }
}

export default Clock