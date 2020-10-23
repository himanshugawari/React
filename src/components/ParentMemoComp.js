import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentMemoComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Himanshu',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Himanshu',
      });
    }, 2000);
  }

  render() {
    console.log('*********Parent Component**********');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentMemoComp;
