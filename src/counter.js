import React from 'react';

function Button (props) {
  return (
    <button onClick={() => props.onClick()}>{props.methodName}</button>
  )
}

function Count (props) {
  return (
    <div>
      {props.count}
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: props.initialCount
    };
  }
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step
    }))
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step
    }))
  }
  render() {
    return <div className="App">
      <Button onClick={this.decrement} methodName="decrement"/>
      <Count count={this.state.count}/>
      <Button onClick={this.increment} methodName="increment"/>
      </div>
  }
}
    
export default Counter
