import React, { Component } from 'react';

class LifecycleBUpdate extends Component {
  constructor() {
    super();
    this.state = {};
    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }

  render() {
    console.log('LifecycleB render');
    return (
      <div>
        <div>LifecycleB</div>
      </div>
    );
  }
}

export default LifecycleBUpdate;
