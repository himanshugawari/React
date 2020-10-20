import React, { Component } from 'react';

import LifecycleB from './LifecycleBUpdate';

class LifecycleAUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Himanshu',
    };
    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Himanshu The Great',
    });
  };

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleAUpdate;
