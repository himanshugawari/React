import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log('callback value', this.state.count)
    // );
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log('callback value', this.state.count)
    );
    console.log('outside setState', this.state.count);
  }

  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.increment5()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
