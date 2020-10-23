import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.inpurRef = React.createRef();
  }

  clickHandler = () => {
    this.inpurRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.inpurRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
