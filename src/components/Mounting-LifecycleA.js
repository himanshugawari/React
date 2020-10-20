import React, { Component } from 'react';

import LifecycleB from './Mounting-LifecycleB';

class LifecycleA extends Component {
  constructor() {
    super();
    this.state = {};
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
