import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { getAllByTestId } from '@testing-library/react';

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 800px;
  font-size: 50px;
  text-align: center;
`
const Row = styled.div`
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
        <Row>
          <div className="month-date">
            {date.getFullYear()} / {date.getMonth() + 1} / {date.getDate()}
          </div>
          <div className="time">
            {date.getHours()} : {date.getMinutes()} : {date.getSeconds()} : {date.getMilliseconds()}
          </div>
        </Row>
      </ClockContainer>
    );
  }
}

export default Clock