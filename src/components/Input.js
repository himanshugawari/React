import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type='text' name='' id='' />
      </div>
    );
  }
}

export default Input;
